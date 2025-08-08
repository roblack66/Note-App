import mongoose, { model, Schema } from "mongoose";

export const userSchema = new Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password:{type:String, required:true},
})

export const UserModel = model('user', userSchema)