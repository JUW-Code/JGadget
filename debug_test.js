
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/orders', (req, res) => {
    const order = { id: `ORD-${Date.now()}`, ...req.body, status: 'pending' };
    console.log(order);
    res.json(order);
});

console.log('Test file created');
