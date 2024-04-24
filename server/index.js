const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;

const newsData = require("./Fakenewsnom.json");

const users = require("./users.json");

app.use(bodyParser.json());


app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/fakenewsnom", (req, res) => {
  res.json(newsData);
});

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    bcrypt.compare(password, users[username], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to authenticate" });
      } else if (result) {
        const token = jwt.sign({ username }, "your-secret-key", {
          expiresIn: "1h",
        });
        res.json({ token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.post("/api/users", (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    res.status(400).json({ error: "Username already exists" });
  } else {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to hash password" });
      } else {
        users[username] = hash;

        // eslint-disable-next-line no-shadow
        fs.writeFile("./users.json", JSON.stringify(users), (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to write to file" });
          } else {
            res.status(201).json({ message: "User created successfully" });
          }
        });
      }
    });
  }
});
app.listen(port, (err) => {
  if (err) {
    console.error("Error: ça marche pas", err);
  } else {
    console.info(`Server is listening on port ${port}`);
  }
});
