import { signUpModel } from "../models/userSchema";
import { Request, Response } from "express";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
const key='sachin'
export const signUp = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try{
  const hashedPass = await bcrypt.hash(password, 10);
  const entry= await signUpModel.create({
    username,
    password:hashedPass,
  });

const payload= {
    id:entry.id
}
const token=jwt.sign(payload,key,{expiresIn:"2h"});
res.cookie("token",token);
 res.status(200).json({
    message:"User profile created successfully"
})
}
catch(err){
     res.status(500).json({
        data:err,
        message:"Unable to register the user"
    })
}
};

