const Product = require('../models/product');

// Получить все продукты
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка получения продуктов', error });
    }
};

// Получить продукты по коллекции
exports.getProductsByCollection = async (req, res) => {
    const { collectionSlug } = req.params;

    try {
        const products = await Product.find({ collection: collectionSlug });
        if (products.length === 0) {
            return res.status(404).json({ message: 'Продукты для данной коллекции не найдены' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка получения продуктов', error });
    }
};

// Создать новый продукт
exports.createProduct = async (req, res) => {
    const { name, slug, price, description, image, collection } = req.body;

    try {
        const product = new Product({ name, slug, price, description, image, collection });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Ошибка создания продукта', error });
    }
};