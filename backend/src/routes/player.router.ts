import { Router } from "express";
import { checkJwtMiddleware } from "../middlewares/authenticate.middleware";
import { PlayerController } from "../controllers/player.controller";
import { PlayerRepository } from "../repositories/player.repository";
import { PlayerService } from "../services/player.service";
import validateRequestMiddleware from "../middlewares/validate-request.middleware";
import queryParamPaginateValidator from "../validators/params/query-param.middleware";
import { validateNumericParamId } from "../validators/params/param.validator";
import { playerExists } from "../middlewares/player-exist.middleware";
import { createPlayerValidator } from "../validators/player/create-player-validator";
import { sanitizeBody } from "../middlewares/sanitize.middleware";
import { updatePlayerValidator } from "../validators/player/update-player-validator";

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

router.get(
  "/:id/image",
  validateNumericParamId("id"),
  validateRequestMiddleware,
  playerExists,
  playerController.getImage
);

router.get(
  '/:id',
  validateNumericParamId("id"),
  validateRequestMiddleware,
  playerExists,
  playerController.getPlayerById
);

router.post(
  '/',
  createPlayerValidator,
  validateRequestMiddleware,
  sanitizeBody,
  playerController.create
);

router.put(
  '/:id',
  validateNumericParamId("id"),
  validateRequestMiddleware,
  playerExists,
  updatePlayerValidator,
  validateRequestMiddleware,
  playerController.update
);

export default router;