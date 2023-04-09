import express from "express";
import { addIncome, deleteIncome, getIncomes } from "../controllers/TransactionController.js";
import { addExpense, deleteExpense, getExpense } from "../controllers/expensesController.js";
import { addLiability, deleteLiability, getLiability } from "../controllers/liabilitiesController.js";

// set router
const router= express.Router();

// assets routes
router.post('/incomes', addIncome)
      .get('/get-incomes',getIncomes)
      .delete('/delete-income/:id',deleteIncome)

      .post('/add-expenses',addExpense)
      .get('/get-expenses',getExpense)
      .delete('/delete-expenses/:id',deleteExpense)

      .post('/add-liability',addLiability)
      .get('/get-liability',getLiability)
      .delete('/delete-liability/:id',deleteLiability)
      

export default router;