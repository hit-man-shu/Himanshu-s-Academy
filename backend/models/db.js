const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  creatorId: {
    type: mongoose.Schema.ObjectId,
  },
});

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  courseId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Course",
  },
});

const AdminModel = mongoose.model("Admin", adminSchema);
const UserModel = mongoose.model("User", userSchema);
const CourseModel = mongoose.model("Course", courseSchema);
const PurchaseModel = mongoose.model("Purchase", purchaseSchema);
module.exports = {
  UserModel,
  AdminModel,
  PurchaseModel,
  CourseModel,
};
