
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const shouldbeLogin = async (req, res) => {
          
          const token = req.cookies.token;
          console.log(process.env.JWT_SECRET_KEY)
          if (!token) return res.status(401).json({ message: "Not Authenticated" });
          jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
                    if (err) return res.status(403).json({ message: "Token is not valid" });
          });
          return res.status(200).json({ message: "You are authenticated" });

          
};


export const shouldbeAdmin = async (req, res) => {

          const token = req.cookies.token;

          console.log("euueu");

          if (!token) return res.status(401).json({ message: "Not Authenticated" });
          jwt.verify(token, process.env.JWT_SCRET_KEY, async (err, payload) => {
                    if (err) return res.status(403).json({ message: "Token is not valid" });
                    if (!payload.isAdmin) {
                              return res.status(403).json({message:"Not Autherize"})
                    }
          });
          res.status(200).json({ message: "You are authenticated" });

          
}