import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
import {
  registerValidation,
  loginValidation,
  itemCreateValidation,
} from "./utils/validation.js";
import { checkAuth, HandlevalidationErrors } from "./utils/utils.js";
import {
  UserController,
  ItemController,
  CategoryController,
  OrderController,
} from "./controller/controllers.js";
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://admin:obla666@cluster0.sqkysvs.mongodb.net/sushido?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Ok"))
  .catch((err) => console.log("DB err", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post(
  "/auth/login",
  loginValidation,
  HandlevalidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  HandlevalidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);
app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/item/all", ItemController.getAll);
app.get("/item/:id", ItemController.getOne);
app.post(
  "/item/create",
  checkAuth,
  itemCreateValidation,
  ItemController.create
);
app.delete("/item/:id", checkAuth, ItemController.remove);
app.patch("/item/:id", checkAuth, ItemController.update);

app.get("/category/all", CategoryController.getAll);
app.post("/category/create", checkAuth, CategoryController.create);
app.get("/category/:name", CategoryController.getByCategory);
app.delete("/category/:name", checkAuth, CategoryController.remove);
app.patch("/category/:name", checkAuth, CategoryController.update);

app.post("/order/create", OrderController.create);
app.get("/order/all", checkAuth, OrderController.getAll);
app.get("/order/:id", checkAuth, OrderController.userOrders);
app.delete("/order/:id", checkAuth, OrderController.remove);

app.listen(4444, (err) => {
  if (err) {
    return console.log("error");
  }
  console.log("SERVER OK");
});
