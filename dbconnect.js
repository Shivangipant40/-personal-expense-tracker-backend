import mongoose from "mongoose";

 export const dbconnect = ()=>{
    try{
        mongoose.connect("mongodb+srv://shivangipant07_db_user:hrL3aBcS4gFuR6OF@cluster0.5qzzrmx.mongodb.net/test?appName=Cluster0");
        console.log("database connected")
    }
    catch(error){
      console.log(error)
    }
}