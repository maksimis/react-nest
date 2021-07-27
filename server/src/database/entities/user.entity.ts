import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { DisplayName } from "../../common/decorators/display.name.decorator";
import { PropertyMetadata } from "../../common/models/property-metadata";

@ObjectType()
@Entity()
export class User {
  public static properties: PropertyMetadata[] = [];

  @DisplayName('Id')
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @DisplayName('First name')
  @Field()
  @Column({ length: 500 })
  firstName: string;

  @DisplayName('Last name')
  @Field()
  @Column('text')
  surname: string;

  @DisplayName('Age')
  @Field(type => Int)
  @Column()
  age: number;

  @DisplayName('Email')
  @Field()
  @Column({unique: true})
  email: string;

  @DisplayName('Phone number')
  @Field()
  @Column()
  phoneNumber: string;
  
  @Column()
  hashedPassword: string;
}
