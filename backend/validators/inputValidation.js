const zod = require("zod");

const signupRegisterSchema = zod.object({
  username: zod
    .string({ required_error: "Username is required" })
    .min(5, "Username must be at least 5 characters long")
    .max(20, "Username must be at most 20 characters long"),
  email: zod
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  password: zod
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long"),
});

const loginRegistereSchema = zod.object({
  email: zod
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  password: zod
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long"),
});

const courseRegisterSchema = zod.object({
  title: zod
    .string({ required_error: "Title is required" })
    .min(5, "Title must be at least 5 characters long"),
  description: zod
    .string({ required_error: "Description is required" })
    .min(10, "Description must be at least 10 characters long"),
  duration: zod
    .string({ required_error: "Duration is required" })
    .min(1, "Duration is required"),
  price: zod
    .number({ required_error: "Price is required" })
    .min(1, "Price must be a positive number"),
  image: zod
    .string({ required_error: "Image url is required" })
    .url("Invalid URL format"),
  _id: zod.string().optional(),
});

const purchaseRegisterSchema = zod.object({
  courseId: zod.string({ required_error: "Course ID is required" }),
});

module.exports = {
  signupRegisterSchema,
  loginRegistereSchema,
  courseRegisterSchema,
  purchaseRegisterSchema,
};
