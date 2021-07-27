import { Injectable } from "@nestjs/common";
import { UserService } from "../../user/services/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../../database/entities/user.entity";
import { UserLoginInput } from "../models/user.login.dto";
import { UserRegisterInput } from "../models/user.register.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserService,
              private jwtService : JwtService){
  }

  public async authenticate(loginInput : UserLoginInput) : Promise<string | null>{
    let user = await this.userRepository.findByEmail(loginInput.email);
    if(user && await bcrypt.compare(loginInput.password, user.hashedPassword)){
      return this.generateToken(user);
    }

    return null;
  }

  public async register(registerInput : UserRegisterInput) : Promise<User | Error>{
    let alreadyExists = !!(await this.userRepository.findByEmail(registerInput.email));
    if(alreadyExists)
      return new Error('User with given email already exists');

    let user = new User();
    user.email = registerInput.email;
    user.hashedPassword = await AuthService.getPasswordHash(registerInput.password);
    user.firstName = registerInput.firstName;
    user.surname = registerInput.surname;
    user.age = registerInput.age;
    user.phoneNumber = registerInput.phoneNumber;

    user = await this.userRepository.create(user);
    return user;
  }

  private generateToken(user: User) : string {
    const payload = { email: user.email, sub: user.id }
    return this.jwtService.sign(payload);
  }

  private static async getPasswordHash(password : string) : Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}