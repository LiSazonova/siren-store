const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // Уникальный slug
});

module.exports = mongoose.model('Collection', collectionSchema);