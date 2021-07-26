import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../Models/user.entity";

@Injectable()
export class AuthService {
  constructor(private userRepository: UserService,
              private jwtService : JwtService){
  }

  public async authenticate(email, password) : Promise<string | null>{
    let user = await this.userRepository.findByEmail(email);
    if(user && AuthService.getPasswordHash(password) === user.hashedPassword){
      return this.generateToken(user);
    }

    return null;
  }

  private generateToken(user: User) : string {
    const payload = { email: user.email, sub: user.id }
    return this.jwtService.sign(payload);
  }

  private static getPasswordHash(password : string) : string {
    return password;
  }
}