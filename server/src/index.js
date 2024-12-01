import express, { response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import bookRouter from "./Routers/Books.routes.js";
import studentRouter from "./Routers/Students.routes.js";
import dashboardCountsRouter from "./Routers/counts.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  }),
);

app.use("", bookRouter);
app.use("", studentRouter);
app.use(" ", dashboardCountsRouter);

const client = new PrismaClient();

// user signup
app.post("/user/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await client.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    res
      .status(201)
      .json({ message: "user registered successfully", user: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
});

// user login
app.post("/user/login", async (req, res) => {
  try {
    //read the email and password from the user
    const email = req.body.email;
    const password = req.body.password;

    //check if the user exists in the database
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(401).json({ message: "wrong email or password" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "wrong email or password" });
      return;
    }

    const token = jwt.sign(user.id, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("authToken", token, { httpOnly: true })
      .json({
        message: "login successful",
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4000, () => console.log("server is running on port 4000"));
