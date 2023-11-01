// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/products', productController.create);

// Add routes for other CRUD operations (read, update, delete).

module.exports = router;
