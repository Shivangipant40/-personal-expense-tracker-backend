import express from "express";
import { dbconnect } from "./dbconnect.js";
import ExpenseRoutes from "./Routes/expense.route.js";
import cors from "cors"

const server = express()
const PORT = 3000;

dbconnect()
server.use(cors())

server.use(express.urlencoded())
server.use(express.json());

server.get("/",(req,res)=>{
    res.send("server is running")
})

server.listen(PORT,()=>{
   console.log("server is running")
})

//create

server.use("/api",ExpenseRoutes)

