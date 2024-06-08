const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "aman@gmail.com",
        password: "456",
        name: "aman",
    },
    {
        username: "rohit@gmail.com",
        password: "789",
        name: "rohit",
    },
];

function userExists(username, password) {
    return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post("/signin", function (req, res) {
    const { username, password } = req.body;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in-memory database",
        });
    }

    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            msg: "Token is missing",
        });
    }

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const user = ALL_USERS.find(user => user.username === username);

        if (!user) {
            return res.status(404).json({
                msg: "User not found",
            });
        }

        return res.json({
            user,
        });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
