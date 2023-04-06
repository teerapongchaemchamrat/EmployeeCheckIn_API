'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();

router.get('/employee', eventControll.getAllProduct);
router.get('/chart', eventControll.createChartEm);
router.post('/add', eventControll.addProduct);



module.exports = {
    routes: router
}