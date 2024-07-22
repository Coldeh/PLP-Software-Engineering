// controllers/expenseController.js
let expenses = require('../expenseModel');

const getAllExpenses = (req, res) => {
    res.json(expenses);
};

const addExpense = (req, res) => {
    const expense = { id: expenses.length + 1, ...req.body };
    expenses.push(expense);
    res.status(201).json(expense);
};

const updateExpense = (req, res) => {
    const id = parseInt(req.params.id);
    const index = expenses.findIndex(e => e.id === id);
    if (index !== -1) {
        expenses[index] = { id, ...req.body };
        res.json(expenses[index]);
    } else {
        res.status(404).send('Expense not found');
    }
};

const deleteExpense = (req, res) => {
    const id = parseInt(req.params.id);
    expenses = expenses.filter(e => e.id !== id);
    res.status(204).send();
};

const getTotalExpense = (req, res) => {
    const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    res.json({ totalExpense });
};

module.exports = { getAllExpenses, addExpense, updateExpense, deleteExpense, getTotalExpense };
