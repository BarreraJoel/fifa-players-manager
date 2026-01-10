import { Router } from "express";
import authRouter from "./auth.router";
import playerRouter from "./player.router";
import metricRouter from "./metric.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/players", playerRouter);
router.use("/metrics", metricRouter);

export default router;