const express = require('express');
const {
    getAllProducts,
    createProduct,
} = require('../controllers/productController');

const router = express.Router();

// Получить все продукты
router.get('/', getAllProducts);

// Создать новый продукт
router.post('/', createProduct);

module.exports = router;
