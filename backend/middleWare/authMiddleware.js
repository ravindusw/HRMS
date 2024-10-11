import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).send("A token is required for authentication");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret_key");
    req.user = decoded;
    console.log("Token verified, user:", decoded);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .send("You do not have permission to perform this action");
    }
    next();
  };
};
