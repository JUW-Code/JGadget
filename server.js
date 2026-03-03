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
    user: 'jgadget563@gmail.com',
    pass: 'ytnp jfik ogdp deas'
  }
});

const PRODUCTS = [
  { id: 'ip-x', title: 'iPhone X', price: 123800 },
  { id: 'ip-xr', title: 'iPhone XR', price: 147920 },
  { id: 'ip-xs', title: 'iPhone XS', price: 157300 },
  { id: 'ip-xs-max', title: 'iPhone XS Max', price: 172040 },
  { id: 'ip-11', title: 'iPhone 11', price: 204200 },
  { id: 'ip-11-pro', title: 'iPhone 11 Pro', price: 271200 },
  { id: 'ip-11-pm', title: 'iPhone 11 Pro Max', price: 334180 },
  { id: 'ip-12', title: 'iPhone 12', price: 269860 },
  { id: 'ip-12-pro', title: 'iPhone 12 Pro', price: 351600 },
  { id: 'ip-12-pm', title: 'iPhone 12 Pro Max', price: 415920 },
  { id: 'ip-13', title: 'iPhone 13', price: 351600 },
  { id: 'ip-13-pro', title: 'iPhone 13 Pro', price: 432000 },
  { id: 'ip-13-pm', title: 'iPhone 13 Pro Max', price: 545900 },
  { id: 'ip-14', title: 'iPhone 14', price: 432000 },
  { id: 'ip-14-pro', title: 'iPhone 14 Pro', price: 594140 },
  { id: 'ip-14-pm', title: 'iPhone 14 Pro Max', price: 700000 },
  { id: 'ip-15', title: 'iPhone 15', price: 639700 },
  { id: 'ip-15-pro', title: 'iPhone 15 Pro', price: 825960 },
  { id: 'ip-15-pm', title: 'iPhone 15 Pro Max', price: 923780 },
  { id: 'ip-16', title: 'iPhone 16', price: 963980 },
  { id: 'ip-16-pro', title: 'iPhone 16 Pro', price: 1288260 },
  { id: 'ip-16-pm', title: 'iPhone 16 Pro Max', price: 1638000 },
  { id: 'ss-s25u', title: 'Samsung Galaxy S25 Ultra', price: 1571000 },
  { id: 'ss-s25p', title: 'Samsung Galaxy S25 Plus', price: 1084580 },
  { id: 'ss-s25', title: 'Samsung Galaxy S25', price: 825960 },
  { id: 'ss-fold6', title: 'Samsung Galaxy Z Fold 6', price: 2140500 },
  { id: 'a1', title: 'AirPods Pro 2', price: 310060 },
  { id: 'a2', title: 'Galaxy Buds 3 Pro', price: 269860 },
  { id: 'a3', title: 'Sony WH-1000XM5', price: 432000 },
  { id: 'w1', title: 'Apple Watch Ultra 2', price: 923780 },
  { id: 'w2', title: 'Apple Watch Series 10', price: 557960 },
  { id: 'w3', title: 'Samsung Galaxy Watch 7', price: 346240 }
];

let orders = [];

// Helper for Naira
function formatNaira(n) { return '₦' + n.toLocaleString('en-NG'); }

app.post('/api/orders', async (req, res) => {
  const order = { ...req.body, status: 'Processing', paymentConfirmed: false };
  orders.push(order);
  console.log('New Order:', order.id);

  const itemsHtml = order.items.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const name = p ? p.title : 'Item';
    const price = p ? p.price : 0;
    return `<li>${name} (x${item.qty}) - ${formatNaira(price * item.qty)}</li>`;
  }).join('');

  try {
    await transporter.sendMail({
      from: '"JGadget Stores" <jgadget563@gmail.com>',
      to: order.email,
      subject: `Order Confirmation ${order.id}`,
      html: `
              <h2>Order Confirmed!</h2>
              <p>Hi ${order.name},</p>
              <p>Thanks for your preorder! We are currently sourcing your items.</p>
              <h3>Order Details:</h3>
              <ul>${itemsHtml}</ul>
              <p><strong>Total:</strong> ${formatNaira(order.total)}</p>
              <p><strong>Order ID:</strong> ${order.id}</p>
              <p>Use your Order ID to track your progress on our website.</p>
            `
    });
  } catch (error) {
    console.log("Email error:", error.message);
  }
  res.status(201).json({ message: 'Order created', orderId: order.id });
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.post('/api/orders/:id/confirm', async (req, res) => {
  const order = orders.find(o => o.id === req.params.id);

  // Accept order data from request body (used when order isn't in server memory)
  const orderData = order || req.body;

  if (!orderData || !orderData.id) return res.status(404).json({ error: 'Order not found' });

  if (order) order.paymentConfirmed = true;

  // Send payment confirmation email
  if (orderData.email) {
    try {
      await transporter.sendMail({
        from: '"JGadget Stores" <jgadget563@gmail.com>',
        to: orderData.email,
        subject: `✅ Payment Confirmed — ${orderData.id}`,
        html: `
                  <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:12px;overflow:hidden">
                    <div style="background:#6c63ff;padding:32px;text-align:center">
                      <h1 style="color:#fff;margin:0;font-size:1.8rem">JGadget</h1>
                      <p style="color:rgba(255,255,255,0.8);margin:8px 0 0">Premium Gadget Preorders</p>
                    </div>
                    <div style="padding:32px">
                      <h2 style="color:#10b981;margin-top:0">✅ Payment Confirmed!</h2>
                      <p>Hi <strong>${orderData.name || 'Customer'}</strong>,</p>
                      <p>Great news! We have confirmed your payment for your preorder. We are now actively sourcing your items.</p>
                      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:20px 0">
                        <p style="margin:0 0 8px"><strong>Order ID:</strong> <span style="font-family:monospace;color:#6c63ff">${orderData.id}</span></p>
                        <p style="margin:0 0 8px"><strong>Total Paid:</strong> ₦${Number(orderData.total || 0).toLocaleString('en-NG')}</p>
                        <p style="margin:0"><strong>Status:</strong> <span style="color:#10b981;font-weight:600">Payment Confirmed ✓</span></p>
                      </div>
                      <p>You can track your order progress at any time using your Order ID on our website.</p>
                      <div style="text-align:center;margin:28px 0">
                        <a href="https://jgadget.com/track.html" style="background:#6c63ff;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600">Track My Order</a>
                      </div>
                      <p style="color:#888;font-size:0.85rem">Questions? Contact us at <a href="mailto:jgadget563@gmail.com">jgadget563@gmail.com</a> or WhatsApp <a href="https://wa.me/2348113037077">08113037077</a>.</p>
                    </div>
                    <div style="background:#f0f0f0;padding:16px;text-align:center;color:#888;font-size:0.8rem">
                      © 2026 JGadget Inc. All rights reserved.
                    </div>
                  </div>
                `
      });
      console.log('Payment confirmation email sent to', orderData.email);
    } catch (error) {
      console.log('Email error:', error.message);
    }
  }

  res.json({ message: 'Payment confirmed', orderId: orderData.id });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`JGadget Backend running at http://localhost:${PORT}`);
});