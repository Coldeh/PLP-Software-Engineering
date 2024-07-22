// routes/expenses.js
const express = require('express');
const { getAllExpenses, addExpense, updateExpense, deleteExpense, getTotalExpense } = require('../expenseController');
const verifyToken = require('../authMiddleware');

const router = express.Router();

router.use(verifyToken);
router.get('/', getAllExpenses);
router.post('/', addExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);
router.get('/total', getTotalExpense);

module.exports = router;
