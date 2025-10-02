import { Request, Response } from "express";

// CREATE USER
export const createUser = async (req: Request, res:Response) => {
   const user = req.body;

   if(!user.fullName || !user.email  || !user.regNo|| !user.phoneNumber || !user.password){
     res.status(400).json({error: "All fields Are required"});
     return;
   }
   console.log(user);
}