const pool = require('../database/db');

const Product = {
    async getAllProducts() {
        const result = await pool.query('SELECT * FROM products');
        return result.rows;
    },

    async getProductById(id) {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = Product;