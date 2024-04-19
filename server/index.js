const express = require('express');

const app = express();
const port = 2000;

const newsData = require('./Fakenews.json');

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