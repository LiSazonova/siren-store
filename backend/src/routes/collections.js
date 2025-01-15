const express = require('express');
const { getCollections } = require('../controllers/collectionController');
const { getProductsByCollection } = require('../controllers/productController'); // Здесь правильный импорт

const router = express.Router();

// Получить все коллекции
router.get('/', getCollections);

// Получить продукты для конкретной коллекции
router.get('/:collectionSlug', getProductsByCollection);

module.exports = router;