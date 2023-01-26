import jwt from "jsonwebtoken";

export default (request, response, next) => {
  const token = (request.headers.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret");
      request.userId = decoded._id;
      next();
    } catch (err) {
      return response.status(403).json({
        msg: "Нет доступа",
      });
    }
  } else {
    return response.status(403).json({
      msg: "Нет доступа",
    });
  }
};
