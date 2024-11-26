import express, { response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import bcrypt from "bcryptjs";
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
)

const client = new PrismaClient();

app.post("/user/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
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

app.listen(4000, () => console.log("server is running on port 4000"));
