const express = require('express');
const router = express.Router();
const { addOrderItems, getMyOrders } = require('../controllers/orderController');

router.post('/', addOrderItems);
router.get('/myorders', getMyOrders);

module.exports = router;
