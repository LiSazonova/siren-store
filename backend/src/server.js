const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const cors = require('cors');

app.use(cors({
    origin: 'https://siren-store.vercel.app',
    methods: 'GET,POST,PUT,DELETE',
}));