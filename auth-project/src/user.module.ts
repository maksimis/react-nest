import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { userProviders } from './user.providers';
import { UserService } from './Services/user.service';
import { UserResolver } from "./Resolvers/user.resolver";

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService, UserResolver],
  exports: [UserService, UserResolver]
})
export class UserModule {}
