import express from 'express'
import userModel from './AppModel.js'


const userRouter = express.Router()


userRouter.post("/sign" , async (req,res)=>{
    let usersign = new userModel(req.body)
    let results =  await usersign.save()
    console.log(results);
res.json(results)

})



export  default userRouter