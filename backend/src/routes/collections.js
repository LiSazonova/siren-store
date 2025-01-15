const express = require('express');
const { getProductsByCollection } = require('../controllers/collectionController');

const router = express.Router();

// Получить продукты по коллекции
router.get('/:collectionSlug', getProductsByCollection);

module.exports = router;
