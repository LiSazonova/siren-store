const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    collection: { type: String, required: true }, // Ссылка на slug коллекции
});

module.exports = mongoose.model('Product', productSchema);