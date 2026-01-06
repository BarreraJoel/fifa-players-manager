import { Router } from "express";
import { checkJwtMiddleware } from "../middlewares/authenticate.middleware";
import { PlayerController } from "../controllers/player.controller";
import { PlayerRepository } from "../repositories/player.repository";
import { PlayerService } from "../services/player.service";
import validateRequestMiddleware from "../middlewares/validate-request.middleware";
import queryParamPaginateValidator from "../middlewares/query-param.middleware";

const router = Router();
const playerRepository = new PlayerRepository;
const playerService = new PlayerService(playerRepository);
const playerController = new PlayerController(playerService);

router.use(checkJwtMiddleware);

router.get(
  '/',
  queryParamPaginateValidator,
  validateRequestMiddleware,
  playerController.getPlayers
);

export default router;