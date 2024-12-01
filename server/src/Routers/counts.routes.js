import { Router } from "express";

import verifyToken from "../middleware/AuthVerifyToken.js";
import dashboardCounts from "../Controllers/counts-Controller.js";

const router = Router();

router.get("/counts/dashboard", verifyToken, dashboardCounts);

export default router;
