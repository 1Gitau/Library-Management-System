import { Router } from "express";
import { createBooks, getBooks } from "../Controllers/books.controller.js";
import verifyToken from "../middleware/AuthVerifyToken.js";

const router = Router();

router.post("/user/addBooks", verifyToken, createBooks);
router.get("/user/getBooks", verifyToken, getBooks);

export default router;
