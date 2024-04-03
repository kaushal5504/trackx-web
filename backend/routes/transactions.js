const { addExpense, getExpense, deleteExpense, getExpenseBetween } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome, getIncomeBetween, updateIncome } = require('../controllers/income');
const { addUser, getUser } = require('../controllers/register');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes/:userid', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses/:userid', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/add-user',addUser)
    .get('/get-user/:username/:password',getUser)
    .get('/get-income-between/:userid/:startDate/:endDate',getIncomeBetween)
    .get('/get-expense-between/:userid/:startDate/:endDate',getExpenseBetween)
    .patch('/update-income/:id',updateIncome)

module.exports = router