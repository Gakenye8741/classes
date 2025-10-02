import { eq } from "drizzle-orm";
import db from "../../drizzle/db";
import { TInsertUser, TSelectUser, users } from "../../drizzle/schema";


// Create A User
export const CreateUserServices = async (user: TInsertUser):Promise<string> =>{
  await db.insert(users).values(user).returning();
  return "User Created Successfully!";
}

// Get student By Reg no
export const getUserByRegNoServices = async (regNo: string): Promise<TSelectUser | undefined> =>{
  return await db.query.users.findFirst({
    where: eq(users.regNo, regNo),
   })
}