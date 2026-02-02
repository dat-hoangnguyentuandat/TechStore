const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
// connectDB(); // call in server.js or here

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

module.exports = app;
