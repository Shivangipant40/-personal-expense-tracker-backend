import express from "express";
import {addExpense,getAllExpenses} from "../controller/UserExpense.controller.js";


 export const ExpenseRoutes = express.Router()

 ExpenseRoutes.post("/addExpense",addExpense)
 ExpenseRoutes.get("/allExpenses",getAllExpenses)

export default ExpenseRoutes;
