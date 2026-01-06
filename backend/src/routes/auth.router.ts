import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { registerUserValidator } from "../validators/auth/register-user-validator";
import validateRequest from "../middlewares/validate-request.middleware";
import { sanitizeBody } from "../middlewares/sanitize.middleware";
import { loginValidator } from "../validators/auth/login.validator";
import { authenticateMiddleware, checkJwtMiddleware } from "../middlewares/authenticate.middleware";

const router = Router();
const authController = new AuthController();

router.post(
  '/register',
  registerUserValidator,
  validateRequest,
  sanitizeBody,
  authController.registerUser
);

router.post(
  '/login',
  loginValidator,
  validateRequest,
  authenticateMiddleware,
  sanitizeBody,
  authController.login
);

router.get(
  '/me',
  checkJwtMiddleware,
  authController.profile
);
export default router;