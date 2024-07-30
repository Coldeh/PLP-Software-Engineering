const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const { User, Expense, Category, PaymentMethod, Budget } = require('./models');

const app = express();
app.use(bodyParser.json());

// Test DB connection and sync models
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.log('Error creating database:', err));

// Define routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
