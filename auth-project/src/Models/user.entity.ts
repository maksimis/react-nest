import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { DisplayName } from "../Infrastructure/display.name.decorator";
import { PropertyMetadata } from "./property.metadata";

@ObjectType()
@Entity()
export class User {
  public static properties: PropertyMetadata[] = [];

  @DisplayName('Идентификатор')
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @DisplayName('Имя')
  @Field()
  @Column({ length: 500 })
  firstName: string;

  @DisplayName('Фамилия')
  @Field()
  @Column('text')
  surname: string;

  @DisplayName('Возраст')
  @Field(type => Int)
  @Column()
  age: number;

  @DisplayName('Email')
  @Field()
  @Column({unique: true})
  email: string;

  @DisplayName('Номер телефона')
  @Field()
  @Column()
  phoneNumber: string;
  
  @Column()
  hashedPassword: string;
}
