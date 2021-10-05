import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../database/entities/user.entity';
import { UserRegisterInput } from '../models/user.register.dto';
import { AuthService } from '../services/auth.service';
import { UserInputError } from 'apollo-server-express';
import { UserLoginInput } from '../models/user.login.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => User)
  async register(@Args('registerData') registerData: UserRegisterInput) {
    const result = await this.authService.register(registerData);
    if (result instanceof Error) throw new UserInputError(result.message);
    return result;
  }

  @Mutation((returns) => String)
  async login(@Args('loginData') loginData: UserLoginInput) {
    const result = await this.authService.authenticate(loginData);
    if (result === null)
      throw new UserInputError('Authentication data is incorrect');

    return result;
  }
}
