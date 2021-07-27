import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../Models/user.entity";
import { UserRegisterInput } from "../Models/user.register.dto";
import { AuthService } from "../Services/auth.service";
import { UserInputError } from "apollo-server-express";
import { UserLoginInput } from "../Models/user.login.dto";

@Resolver()
export class AuthResolver{
  constructor(private authService: AuthService) {
  }

  @Mutation(returns => User)
  async register(@Args('registerData') registerData: UserRegisterInput){
    let result = await this.authService.register(registerData);
    if(result instanceof Error)
      throw new UserInputError(result.message);
    return result;
  }

  @Mutation(returns => String)
  async login(@Args('loginData') loginData: UserLoginInput){
    let result = await this.authService.authenticate(loginData);
    if(result === null)
      throw new UserInputError("Authentication data is incorrect");

    return result;
  }
}