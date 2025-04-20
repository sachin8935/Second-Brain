import { Request, Response } from "express";
import { signUpModel } from "../models/userSchema";
import jwt from "jsonwebtoken"
const key="sachin"
export const signin=async (req:Request,res:Response)=>{
    const {username,password}= req.body;
    const user= await signUpModel.findOne({username,password});
    if(user){
        const token = jwt.sign({
            id:user.id
        },key)
        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }

}