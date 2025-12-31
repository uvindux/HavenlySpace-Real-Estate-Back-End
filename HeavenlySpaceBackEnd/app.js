import express from "express";
import cookieParser from "cookie-parser"
import postRout from "./routes/post.route.js";
import auth from "./routes/auth.route.js";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(
          cors({
                    origin: process.env.CLIENT_URL,
                    credentials: true,
          })
);



app.use("/api/post",(postRout))
app.use ("/api/auth",(auth));


app.listen(8800,()=>{
          console.log("Server is running correctly");
});
app.use("/api/test",(req,res)=>{
          res.send("its working");
})