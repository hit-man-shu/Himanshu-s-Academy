const { Router } = require("express");
const bcrypt = require("bcrypt");
const { validate } = require("../validators/utils");
const { generateToken, auth } = require("./auth");
const {
  signupRegisterSchema,
  loginRegistereSchema,
  purchaseRegisterSchema,
} = require("../validators/inputValidation");
const { UserModel, PurchaseModel } = require("../models/db");
const user_secret_key = process.env.USER_JWT_SECRET;
const userRouter = Router();

userRouter.post("/signup", validate(signupRegisterSchema), async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 4);

    const user = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "User already exist!" });
  }
});

userRouter.post("/login", validate(loginRegistereSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(
      {
        accountName: user.username,
        accountId: user._id,
        accountEmail: user.email,
      },
      user_secret_key
    );
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post(
  "/purchase",
  auth(user_secret_key),
  validate(purchaseRegisterSchema),
  async (req, res) => {
    try {
      const { courseId } = req.body;

      const alreadyPurchased = await PurchaseModel.findOne({
        userId: req.accountId,
        courseId,
      });

      if (alreadyPurchased) {
        return res.status(409).json({ message: "Course already purchased" });
      }

      const purchase = await PurchaseModel.create({
        userId: req.accountId,
        courseId,
      });
      res
        .status(201)
        .json({ message: "Course purchase successfully", purchase });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

userRouter.get("/my/courses", auth(user_secret_key), async (req, res) => {
  try {
    const courses = await PurchaseModel.find({
      userId: req.accountId,
    }).populate("courseId");
    res.status(200).json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  userRouter,
};
