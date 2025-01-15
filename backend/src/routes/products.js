const express = require('express');
const {
    getAllProducts,
    createProduct,
    getProductBySlug
} = require('../controllers/productController');

const router = express.Router();

// Получить все продукты
router.get('/', getAllProducts);

// Получить продукт по slug
router.get('/:slug', getProductBySlug);

// Создать новый продукт
router.post('/', createProduct);

module.exports = router;
