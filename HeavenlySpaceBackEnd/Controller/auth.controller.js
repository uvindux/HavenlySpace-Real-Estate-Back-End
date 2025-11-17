import bcrypt from "bcrypt";
import prisma from "../lib/prisma";


export const register= async(req,res)=>{
          const {username,email,password}=req.body;

          console.log(req.body);
          const hashPassword = await bcrypt.hash(password,10);
          console.log(hashPassword);

          const newUser =await prisma.user.create({
                    data :{
                              username,
                              email,
                              password :hashPassword,
                    },
          });

          console.log(newUser)



}

export const login= (req,res)=>{
          //Implementation

}

export const logout= (req,res)=>{
          //Implementation

}



