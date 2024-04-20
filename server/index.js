const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const newsData = require('./Fakenews.json');

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.get('/api/news', (req, res) => {
    res.json(newsData);
});

app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })

    .on("error", (err) => {
        console.error("Error:", err.message);
    });