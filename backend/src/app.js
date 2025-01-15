require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Подключение к базе данных
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/collections', require('./routes/collections'));

app.use('/api/products', require('./routes/products'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
