import express from "express";

const router = express.Router();

router.get("/test",(req,res){
          console.log("Router works");
})

export default router;

