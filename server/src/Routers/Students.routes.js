import { Router } from "express";
import { createStudents } from "../Controllers/student.controller.js";
import verifyToken from "../middleware/AuthVerifyToken.js";

const router = Router();

router.post("/user/addstudent", verifyToken, createStudents);

export default router;
