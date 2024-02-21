import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    userName: String,
    Password :String
})


const userModel = mongoose.model("user" , userSchema)

export default userModel