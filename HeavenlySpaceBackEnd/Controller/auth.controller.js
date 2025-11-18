import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"


export const register= async(req,res)=>{
          try{
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

          res.send(newUser)

          }
          catch(err){
                    console.log(err);
                    res.status("Failed to create user");
          }
        



}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

//     // Set cookie properly
//     res.cookie("token", "myvalue", {
//       httpOnly: true,
//       secure: false, // true in production with HTTPS
//       sameSite: "strict",
//       path: "/"
//     });
const token = jwt.sign({
          id:user.id,

},process.env.JWT_SECRET_KEY,{expiresIn:age})

const age = 1000 * 60 * 60 * 24 * 7;
res.cookie("token",token,{
         httpOnly :true,
         maxAge:age,




}).status(200).json({message:"Login successful"});

    return res.status(200).json({ message: "Success" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to login" });
  }
};


export const logout= (req,res)=>{
         res.clearCookie("token").status(200).json({message:"You Logout successsfull"});
}



