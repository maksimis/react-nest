import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./Constants/jwtConstants";
import { AuthService } from "./Services/auth.service";
import { AuthResolver } from "./Resolvers/auth.resolver";
import { JwtStrategy } from "./Services/jwt.strategy";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [AuthService, AuthResolver]
})
export class AuthModule {}
