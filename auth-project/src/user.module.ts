import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { userProviders } from './database/user.providers';
import { UserService } from './Services/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
})
export class UserModule {}
