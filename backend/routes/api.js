const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;