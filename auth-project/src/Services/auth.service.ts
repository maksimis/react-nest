import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../Models/user.entity";
import { UserLoginDto } from "../Models/user.login.dto";
import { UserRegisterDto } from "../Models/user.register.dto";

@Injectable()
export class AuthService {
  constructor(private userRepository: UserService,
              private jwtService : JwtService){
  }

  public async authenticate(loginInput : UserLoginDto) : Promise<string | null>{
    let user = await this.userRepository.findByEmail(loginInput.email);
    if(user && AuthService.getPasswordHash(loginInput.password) === user.hashedPassword){
      return this.generateToken(user);
    }

    return null;
  }

  public async register(registerInput : UserRegisterDto) : Promise<User | Error>{
    let alreadyExists = !(await this.userRepository.findByEmail(registerInput.email));
    if(alreadyExists)
      return new Error('User with given email already exists');

    let user = new User();
    user.email = registerInput.email;
    user.hashedPassword = AuthService.getPasswordHash(registerInput.password);
    user.firstName = registerInput.firstName;
    user.surname = registerInput.surname;

    user = await this.userRepository.create(user);
    return user;
  }

  private generateToken(user: User) : string {
    const payload = { email: user.email, sub: user.id }
    return this.jwtService.sign(payload);
  }

  private static getPasswordHash(password : string) : string {
    return password;
  }
}