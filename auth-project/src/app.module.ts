import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./Constants/jwtConstants";
import { AuthModule } from "./auth.module";

@Module({
  imports: [
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
