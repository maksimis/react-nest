import { Query, Resolver } from "@nestjs/graphql";
import { User } from "../Models/user.entity";
import { UserService } from "../Services/user.service";
import { AuthService } from "../Services/auth.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../Infrastructure/Guards/jwt.auth.guard";
import { PropertyMetadata } from "../Models/property.metadata";

@Resolver(of => User)
export class UserResolver{
  constructor(private userService: UserService) {
  }

  @Query(returns => [User])
  @UseGuards(JwtAuthGuard)
  async users() : Promise<User[]>{
    return await this.userService.findAll();
  }

  @Query(returns => [PropertyMetadata])
  @UseGuards(JwtAuthGuard)
  userProperties() : PropertyMetadata[]{
    return this.userService.getUserProperties();
  }
}