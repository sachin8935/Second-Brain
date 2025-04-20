import express  from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { connectDB } from "./database";
import authRoutes from "./routes";
const app = express();
dotenv.config();
connectDB();
app.use(express.json())
app.use(cookieParser());
app.use('/api/v1',authRoutes)
app.get('/api/v1',(req,res)=>{
    res.send("<h2>Hello I am done </h2>")
})
app.listen(3000,()=>{
    console.log("The server is active")
});