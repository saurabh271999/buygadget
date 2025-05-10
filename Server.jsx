// server.js
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID',
  key_secret: 'YOUR_RAZORPAY_SECRET_KEY'
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body; // Get the amount from client-side

  const options = {
    amount: amount * 100, // Razorpay expects the amount in paise
    currency: 'INR',
    receipt: 'receipt#1',
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
