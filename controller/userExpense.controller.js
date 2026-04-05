import  { Expense } from '../models/expense.Schema.js'

//1. creating expense

const addExpense = async(req,res)=>{
  try{
   const {title,amount,type,category,date} = req.body;
   console.log({title,amount,type,category,date})

// validating user input
   if(!title || !amount || !type || !category || !date){
    return res.status(400).json({message:"all fields are required"})
   }

   //saving to database

   const expense = await Expense.create({
    title,
    amount,
    type,
    category,
    date
   })

   //sending response
   res.status(201).json({message:"expense created successfully", data:expense})
  }catch(error){
    res.status(400).json({message:"error adding expense",error:error.message})
  }
}


// 2. get all expenses

const getAllExpenses = async(req,res)=>{
  try{
    const data = await Expense.find()
    res.status(200).json({data})
  }catch(error){
    res.status(500).json({message:"server error"})
  }
}

export {addExpense,getAllExpenses};