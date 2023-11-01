// controllers/productController.js
const Product = require('../models/product');

// Controller functions for CRUD operations
// Example: Create a new product
exports.create = (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published,
    category: req.body.category,
  });

  product.save((err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(data);
  });
};
// Add controllers for other CRUD operations (read, update, delete).