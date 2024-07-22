// routes/auth.js
const express = require('express');
const { login } = require('../authController');

const router = express.Router();

router.post('/login', login);

module.exports = router;
