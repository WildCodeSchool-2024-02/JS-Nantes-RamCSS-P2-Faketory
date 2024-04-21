const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
const port = 3000;

const newsData = require('./Fakenewsnom.json');

const users = require('./users.json');

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.get('/api/fakenewsnom', (req, res) => {
    res.json(newsData);
});

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.post('/api/users', (req, res) => {
    const { username, password } = req.body;

    if (users[username]) {
        res.status(400).json({ error: 'Username already exists' });
    } else {
        users[username] = password;


        fs.writeFile('./users.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to write to file' });
            } else {
                res.status(201).json({ message: 'User created successfully' });
            }
        });
    }
});

app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
    .on("error", (err) => {
        console.error("Error:", err.message);
    });