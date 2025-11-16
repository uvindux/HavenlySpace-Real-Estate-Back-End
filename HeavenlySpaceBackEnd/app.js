import express from "express";
import router from "./routes/post.route";
const postRout from 
const app =express();


app.use("/api/post",(postRout))

// console.log("test is working");

// app.listen(8800,()=>{
//           console.log("Server is running");
// });
// app.use("/api/test",(req,res)=>{
//           res.send("its working");
// })