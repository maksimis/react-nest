import { Query, Resolver } from "@nestjs/graphql";
import { User } from "../../database/entities/user.entity";
import { UserService } from "../services/user.service";
import { AuthService } from "../../auth/services/auth.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt.auth.guard";
import { PropertyMetadata } from "../../common/models/property-metadata";

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