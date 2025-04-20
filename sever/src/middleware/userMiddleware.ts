import { NextFunction,Request,Response } from "express";
import jwt  from "jsonwebtoken";
import {z} from 'zod';
import { signUpModel } from "../models/userSchema";
const key= "sachin"
const signupValidate= z.object({
    username:z.string().min(8,"The username should be of atleast 8 characters"),
    password:z.string().min(8,"The password should be of 8 digit")
})
export const UserSignupVerify= async(req:Request,res:Response,next:NextFunction)=>{
    const ParseResult=signupValidate.safeParse(req.body);
    if(!ParseResult.success){
         res.status(411).json({
            errors: ParseResult.error.flatten().fieldErrors
        })
        return;
    }
    next();
};
export const UserSignInVerify= async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.token;
    if(token){
        const decode:any = jwt.verify(token,key);
        const user = await signUpModel.findById(decode.id);
        if(user){
            res.status(200).json({
                message:"The user is signed in"
            })
        }
    }
    next();
}