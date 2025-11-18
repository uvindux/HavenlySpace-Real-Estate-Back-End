import express from "express";
import cookieParser from "cookie-parser"
import postRout from "./routes/post.route.js";
import auth from "./routes/auth.route.js";
const app =express();
import dotenv from "dotenv"

app.use(express.json());
app.use(cookieParser());
dotenv.config();


app.use("/api/post",(postRout))
app.use ("/api/auth",(auth));


// console.log("test is working");

app.listen(8800,()=>{
          console.log("Server is running correctly");
});
// app.use("/api/test",(req,res)=>{
//           res.send("its working");
// })