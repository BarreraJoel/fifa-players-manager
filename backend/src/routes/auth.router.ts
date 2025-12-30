import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { registerUserValidator } from "../validators/auth/register-user-validator";
import validateRequest from "../middlewares/validate-request.middleware";
import { sanitizeBody } from "../middlewares/sanitize.middleware";

const router = Router();
const authController = new AuthController();

router.post(
    '/register',
    registerUserValidator,
    validateRequest,
    sanitizeBody,
    authController.registerUser
);

export default router;