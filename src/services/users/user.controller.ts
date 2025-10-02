import { Request, Response } from "express";
import { CreateUserServices } from "./user.service";

// CREATE USER
export const createUser = async (req: Request, res:Response) => {
   const user = req.body;
// check condition to make sute no field is empty
   if(!user.fullName || !user.email  || !user.regNo|| !user.phoneNumber || !user.password){
     res.status(400).json({error: "All fields Are required"});
     return;
   }
   console.log(user);

  //  Sending the data to uservice to send it to db
  try {
    const createdUser = await CreateUserServices(user);

    // conditions for checking empty response and finding ways to communicate the response
    if(createdUser.length === 0 || !createdUser){
      res.status(400).json({error: "User Not Created!!!"});
    }else{
      res.status(200).json({message: createdUser});
    }
    // Catching server related Errors
  } catch (error:any) {
      res.status(500).json({error: error.message || "Server Failed!"})
  }
   

}