import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const token = req.cookies.authToken;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    req.userId = decoded;
  });
  next();
}
export default verifyToken;
