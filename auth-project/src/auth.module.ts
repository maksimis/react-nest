import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./Constants/jwtConstants";
import { AuthService } from "./Services/auth.service";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
