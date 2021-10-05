import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserRegisterInput {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  surname: string;

  @Field((type) => Int)
  age: number;

  @Field()
  phoneNumber: string;

  @Field()
  password: string;
}
