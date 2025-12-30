import { hashSync } from "bcrypt";
import { RegisterUserDto } from "../dto/auth/register-user.dto";
import { User } from "../models";

export class UserService {

  public async registerUser(dto: RegisterUserDto) {
    const newUser = await this.createUser(dto);
    return newUser ?? null;
  }

  private async createUser(dto: RegisterUserDto) {
    dto.password = hashSync(dto.password, 10);
    const user: User = await User.create(dto as any);
    return user;
  }

}
