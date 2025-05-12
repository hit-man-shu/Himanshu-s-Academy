const jwt = require("jsonwebtoken");

const generateToken = (
  { accountId, accountEmail, accountName },
  JWT_SECRET
) => {
  return jwt.sign({ accountId, accountEmail, accountName }, JWT_SECRET);
};

const auth = (JWT_SECRET) => (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedtoken = jwt.verify(token, JWT_SECRET);
    req.accountId = decodedtoken.accountId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  generateToken,
  auth,
};
