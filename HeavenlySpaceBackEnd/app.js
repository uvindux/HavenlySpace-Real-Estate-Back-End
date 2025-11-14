import express from "express";

const app =express();

console.log("test is working");

app.listen(8800,()=>{
          console.log("Server is running");
});
app.use("/api/test",(req,res)=>{
          res.send("its working");
})