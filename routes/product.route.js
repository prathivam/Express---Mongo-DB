import {createProduct, getAllProducts, getProductById,updateProductById, deleteProductById} from '../controllers/product.controller.js';
import express from 'express';

const router = express.Router();

// Creating a Product
router.post('/', createProduct);
// Get all Products
router.get('/', getAllProducts);
// Get a Product by ID
router.get('/:id', getProductById);
// Update Product By Id
router.put('/:id', updateProductById);
// Delete Product By Id
router.delete('/:id', deleteProductById);

export default router;