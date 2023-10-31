const express = require('express');
const router = express.Router();
const { send } = require('../controllers/emailController');

router.post('/email', send);

module.exports = router;
