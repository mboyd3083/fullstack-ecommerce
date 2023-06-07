import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 5001;
import productRoutes from "./routes/productRoutes.js";

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
