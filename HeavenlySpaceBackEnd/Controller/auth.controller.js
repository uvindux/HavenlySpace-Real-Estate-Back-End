import bcrypt, { genSaltSync } from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config()



export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    const { password: _password, ...safeUser } = newUser;

    res.status(200).json({ message: "User Created Successfully", user: safeUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Define age BEFORE using it
    const age = 1000 * 60 * 60 * 24 * 7;
    console.log(process.env.JWT_SECRET_KEY)
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: true
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: age,
      sameSite: "lax",
    });

    const { password: _pw, ...safeUser } = user;
    return res.status(200).json({ message: "Login successful", user: safeUser });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to login" });
  }
};


export const logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" }).status(200).json({ message: "You Logout successsfull" });
};



