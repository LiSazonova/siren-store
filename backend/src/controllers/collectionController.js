const Collection = require('../models/collection');

// Получить все коллекции
exports.getCollections = async (req, res) => {
    try {
        const collections = await Collection.find();
        res.json(collections);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка получения коллекций', error });
    }
};

// Создать новую коллекцию
exports.createCollection = async (req, res) => {
    const { title, image, slug } = req.body;

    try {
        const collection = new Collection({ title, image, slug });
        await collection.save();
        res.status(201).json(collection);
    } catch (error) {
        res.status(400).json({ message: 'Ошибка создания коллекции', error });
    }
};
