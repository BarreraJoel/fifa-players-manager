import { Router } from "express";
import authRouter from "./auth.router";
import playerRouter from "./player.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/players", playerRouter);

export default router;