import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { RegisterUserDto } from "../dto/auth/register-user.dto";
import { UserResource } from "../resources/user/user-resource";
import { createToken } from "../helpers/token-generator";
import { jwtConfig } from "../config/jwt.config";

export class AuthController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService;
  }

  public registerUser = async (request: Request, response: Response) => {
    try {
      const body = request.body as RegisterUserDto;
      const user = await this.userService.registerUser(body);

      if (!user)
        throw new Error("No se registro el usuario");

      const jwt = createToken({
        id: user.id, email: user.email
      }, jwtConfig.access_secret, jwtConfig.access_expire);

      response.cookie('jwt', jwt, {
        httpOnly: true,
        sameSite: true,
        signed: true,
        secure: true
      });

      return response.status(201).json({
        success: true,
        message: "Registro exitoso!",
        data: {
          user: UserResource.toResponse(user),
          access_token: jwt,
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}