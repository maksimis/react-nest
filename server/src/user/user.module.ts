import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { UserService } from './services/user.service';
import { UserResolver } from "./resolvers/user.resolver";

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService, UserResolver],
  exports: [UserService, UserResolver]
})
export class UserModule {}
