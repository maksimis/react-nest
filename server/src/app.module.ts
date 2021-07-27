import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./Constants/jwtConstants";
import { AuthModule } from "./auth.module";
import { DatabaseModule } from "./database/database.module";
import { GraphQLModule } from "@nestjs/graphql";
import * as path from "path";

@Module({
  imports: [
    UserModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req })
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
