import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { RegisterUserDto } from "../dto/auth/register-user.dto";
import { UserResource } from "../resources/user/user-resource";
import { createToken } from "../helpers/token-generator";
import { jwtConfig } from "../config/jwt.config";
import { setAccessTokenCookie } from "../helpers/cookies";

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
        sub: user.id, email: user.email
      }, jwtConfig.access_secret, jwtConfig.access_expire);

      setAccessTokenCookie(response, jwt);

      return response.status(201).json({
        success: true,
        message: "Registro exitoso!",
        data: UserResource.toResponse(user)
      });
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

}