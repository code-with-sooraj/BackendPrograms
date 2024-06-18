const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input');
    } else {
        const sum = a + b;
        res.send(sum.toString());
    }
});
app.get('/interest', (req, res) => {
    const amount = parseInt(req.query.amount);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    
    if (isNaN(amount) || isNaN(rate) || isNaN(time)) {
        res.status(400).send('Invalid input');
    } else {
        const sum = (amount*rate*time)/100;
        res.send(sum.toString());
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
