import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PropertyMetadata {
  constructor(propertyName?: string, displayName?: string) {
    this.propertyName = propertyName;
    this.displayName = displayName;
  }

  @Field()
  public propertyName: string;

  @Field()
  public displayName: string;
}