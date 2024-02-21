import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./AppRouter.js";

const app = express()

const connection = mongoose.connect("mongodb+srv://hanshajangir061:hansha6861@cluster0.nmvlblj.mongodb.net/?retryWrites=true&w=majority")

app.use(cors())
app.use(express.json())
app.use("/userlogin" , userRouter)





connection.then(()=>{
    app.listen(4000 , ()=> console.log("Server has been started"))
    })
    .catch((err)=> console.log(err))