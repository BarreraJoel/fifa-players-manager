import { Router } from "express";
import { checkJwtMiddleware } from "../middlewares/authenticate.middleware";
import { MetricController } from "../controllers/metric.controller";
import { MetricService } from "../services/metric.service";
import { MetricRepository } from "../repositories/metrics.repository";

const router = Router();
const metricRepository = new MetricRepository;
const metricService = new MetricService(metricRepository);
const metricController = new MetricController(metricService);

router.use(checkJwtMiddleware);

router.get(
  '/',
  metricController.getMetrics
);

export default router;