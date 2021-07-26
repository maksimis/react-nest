import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../Models/user.entity";
import { UserRegisterDto } from "../Models/user.register.dto";
import { AuthService } from "../Services/auth.service";
import { UserInputError } from "apollo-server-express";
import { UserLoginDto } from "../Models/user.login.dto";

@Resolver()
export class AuthResolver{
  constructor(private authService: AuthService) {
  }

  @Mutation(returns => User)
  async register(@Args('registerData') registerData: UserRegisterDto){
    let result = await this.authService.register(registerData);
    if(result instanceof Error)
      throw new UserInputError(result.message);
    return result;
  }

  @Mutation(returns => String)
  async login(@Args('loginData') loginData: UserLoginDto){
    let result = await this.authService.authenticate(loginData);
    if(result === null)
      throw new UserInputError("Authentication data is incorrect");

    return result;
  }
}