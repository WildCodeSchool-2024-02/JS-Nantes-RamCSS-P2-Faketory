const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const newsData = require('./Fakenewsnom.json');


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.get('/api/fakenewsnom', (req, res) => {
    res.json(newsData);
});

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;

    if (username === 'steven' && password === 'password') {
        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })

    .on("error", (err) => {
        console.error("Error:", err.message);
    });