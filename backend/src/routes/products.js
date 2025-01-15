const express = require('express');
const {
    getAllProducts,
    getProductsByCollection,
    createProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts); // Получить все продукты
router.get('/:collectionSlug', getProductsByCollection); // Продукты по коллекции
router.post('/', createProduct); // Создать новый продукт

module.exports = router;
