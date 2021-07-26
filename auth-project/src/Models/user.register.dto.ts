import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserRegisterDto {
  @Field()
  email : string;

  @Field()
  firstName : string;

  @Field()
  surname : string;

  @Field()
  password :string;
}