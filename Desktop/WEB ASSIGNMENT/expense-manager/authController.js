// authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../userModel');

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
        res.json({ auth: true, token });
    } else {
        res.status(401).send('Invalid credentials');
    }
};

module.exports = { login };
