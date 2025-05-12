const { Router } = require("express");
const { purchaseRegisterSchema } = require("../validators/inputValidation");
const { CourseModel } = require("../models/db");

const courseRouter = Router();

courseRouter.get("/", async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.status(200).json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

courseRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseModel.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res
      .status(200)
      .json({ message: "Course fetched successfully", course });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { courseRouter };
