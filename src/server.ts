// IMports
import express, {Application} from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./services/users/user.routes";
// import "dotenv/config"
// Configuration of our system port 
dotenv.config();
const PORT = process.env.PORT || 5000

// Initialiazation of the express.js
const App:Application = express();

// middleware
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({extended: true}))


//Routes 
App.use('/api/users', userRoute);
// Default Message
App.get('/',(req,res)=>{
    res.send("Congratualtions the server is working")
})

App.listen(PORT, ()=>{{
    console.log(`App is running on http://localhost:${PORT}`);
    
}})
