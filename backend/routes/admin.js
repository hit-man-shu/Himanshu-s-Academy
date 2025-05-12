const { Router } = require("express");
const bcrypt = require("bcrypt");
const {
  signupRegisterSchema,
  loginRegistereSchema,
  courseRegisterSchema,
} = require("../validators/inputValidation");
const { validate } = require("../validators/utils");
const { generateToken, auth } = require("./auth");
const { AdminModel, CourseModel } = require("../models/db");

const admin_secret_key = process.env.ADMIN_JWT_SECRET;
const adminRouter = Router();

adminRouter.post(
  "/signup",
  validate(signupRegisterSchema),
  async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 4);

      const admin = await AdminModel.create({
        username,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
      return res.status(500).json({ message: "Admin already exist!" });
    }
  }
);
adminRouter.post("/login", validate(loginRegistereSchema), async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const validatePassword = await bcrypt.compare(password, admin.password);

    if (!validatePassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(
      {
        accountName: admin.username,
        accountId: admin._id,
        accountEmail: admin.email,
      },
      admin_secret_key
    );
    res.status(200).json({
      message: "Login successful",
      admin: { username: admin.username, email: admin.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
adminRouter.post(
  "/create",
  validate(courseRegisterSchema),
  auth(admin_secret_key),
  async (req, res) => {
    try {
      const { title, description, duration, price, image } = req.body;
      const course = await CourseModel.create({
        title,
        description,
        duration,
        price,
        image,
        creatorId: req.accountId,
      });
      res.status(201).json({ message: "Course created successfully", course });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
adminRouter.put(
  "/edit",
  validate(courseRegisterSchema),
  auth(admin_secret_key),
  async (req, res) => {
    try {
      const { title, description, duration, price, image, _id } = req.body;

      const course = await CourseModel.updateOne(
        { _id, creatorId: req.accountId },
        { title, description, duration, price, image }
      );

      res
        .status(201)
        .json({ message: "Course updated successfully", course: course });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
adminRouter.get("/bulk", auth(admin_secret_key), async (req, res) => {
  try {
    const courses = await CourseModel.find({ creatorId: req.accountId });
    res.status(200).json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

adminRouter.delete("/:id", auth(admin_secret_key), async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCourse = await CourseModel.deleteOne({
      _id: id,
      creatorId: req.accountId,
    });

    if (!deleteCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}),
  (module.exports = { adminRouter });
