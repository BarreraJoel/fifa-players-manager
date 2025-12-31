import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { registerUserValidator } from "../validators/auth/register-user-validator";
import validateRequest from "../middlewares/validate-request.middleware";
import { sanitizeBody } from "../middlewares/sanitize.middleware";

const router = Router();
const authController = new AuthController();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints para autenticación y gestión de usuarios
 */

/**
  * @swagger
  * /api/auth/register:
  *   post:
  *     summary: Registrar un nuevo usuario
  *     description: Crea una nueva cuenta de usuario
  *     tags: [Authentication]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/RegisterUserRequest'
  *     responses:
  *        201:
  *         description: Usuario registrado exitosamente
  *         content:
  *           application/json:
  *             schema:
  *                 $ref: '#/components/schemas/RegisterUserResponse'
  *        400:
  *         description: Solicitud inválida
  *         content:
  *           application/json:
  *             schema:
  *              $ref: '#/components/schemas/BadRequest'
  *        500:
  *         description: Error interno del servidor
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/InternalServerError'
  */
router.post(
    '/register',
    registerUserValidator,
    validateRequest,
    sanitizeBody,
    authController.registerUser
);

export default router;