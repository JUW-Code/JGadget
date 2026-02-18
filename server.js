const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter (Configure with your details)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'onikosijuwon6@gmail.com', // REPLACE WITH YOUR EMAIL
        pass: 'odty xyuc kifn tvgb'     // REPLACE WITH YOUR APP PASSWORD
    }
});

// In-memory Database (Mock)
const PRODUCTS = [
    { id: 'p1', title: 'iPhone 16 Pro Max', price: 1199.00, category: 'phone', img: 'https://placehold.co/600x600/111/FFF?text=iPhone+16+Pro+Max', rating: 5.0 },
    { id: 'p2', title: 'iPhone 16 Pro', price: 999.00, category: 'phone', img: 'https://placehold.co/600x600/222/FFF?text=iPhone+16+Pro', rating: 4.9 },
    { id: 'p3', title: 'iPhone 16', price: 799.00, category: 'phone', img: 'https://placehold.co/600x600/333/FFF?text=iPhone+16', rating: 4.8 },
    { id: 'a1', title: 'AirPods Pro 2', price: 249.00, category: 'audio', img: 'https://placehold.co/600x600/EEE/111?text=AirPods+Pro+2', rating: 4.8 },
    { id: 'w1', title: 'Apple Watch Ultra 2', price: 799.00, category: 'wearable', img: 'https://placehold.co/600x600/111/FFF?text=Watch+Ultra+2', rating: 4.9 }
];

let orders = [];

// Routes
app.get('/api/products', (req, res) => {
    const { category } = req.query;
    if (category && category !== 'all') {
        return res.json(PRODUCTS.filter(p => p.category === category));
    }
    res.json(PRODUCTS);
});

app.get('/api/products/:id', (req, res) => {
    const product = PRODUCTS.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

app.post('/api/orders', async (req, res) => {
    const order = { id: `ORD-${Date.now()}`, ...req.body, status: 'pending' };
    orders.push(order);
    console.log('New Order:', order);

    // Generate Items HTML
    const itemsHtml = order.items.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        const name = product ? product.title : 'Item';
        const price = product ? product.price : 0;
        return `<li>${name} (x${item.qty}) - $${(price * item.qty).toFixed(2)}</li>`;
    }).join('');

    // Send Email
    try {
        const info = await transporter.sendMail({
            from: '"JGadget Orders" <no-reply@jgadget.com>',
            to: order.email, // Send to customer
            subject: `Order Confirmation ${order.id}`,
            text: `Thank you for your patronage! Items: ${order.items.length}. Total: $${order.total}`, // Plain text body
            html: `
        <h2>Order Confirmed!</h2>
        <p>Hi ${order.name},</p>
        <p><strong>Thanks for your patronage!</strong> We appreciate your business.</p>
        
        <h3>Order Details:</h3>
        <ul>${itemsHtml}</ul>
        
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
        <p>We will notify you when it ships.</p>
      `
        });
        console.log("Email sent: %s", info.messageId);
    } catch (error) {
        console.log("Email error (expected if no credentials):", error.message);
    }

    res.status(201).json({ message: 'Order created', orderId: order.id });
});

// Start Server
app.listen(PORT, () => {
    console.log(`JGadget Backend running at http://localhost:${PORT}`);
});