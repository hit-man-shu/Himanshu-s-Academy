const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
