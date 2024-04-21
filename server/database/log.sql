
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);


INSERT INTO users (username, password) VALUES ('steven', 'password1');
INSERT INTO users (username, password) VALUES ('hakim', 'password2');