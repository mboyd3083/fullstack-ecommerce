import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  createCategory,
  getCategories,
  getCategoryById,
  getLatestProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/category").get(getCategories).post(protect, admin, createCategory);
router.get("/top", getTopProducts);
router.get("/latest", getLatestProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.route("/category/:id").get(getCategoryById);
export default router;
