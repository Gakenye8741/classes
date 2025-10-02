import { Router } from "express";
import { createUser } from "./user.controller";


const userRoute = Router();

// create user
userRoute.post('/CreateUser', createUser);

// export 
export default userRoute;