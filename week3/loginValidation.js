const express = require("express");
const app = express();
const zod = require('zod');

// Middleware to parse JSON request bodies
app.use(express.json());

function validateLogin(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });
    return schema.safeParse(obj); // Return the result directly
}

app.post('/', (req, res) => {
    const response = validateLogin(req.body);
    if (!response.success) {
        res.status(400).json({ error: response.error.errors }); // Adjusted to show detailed errors
        return;
    } else {
        res.json({ message: "Login Successful" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
