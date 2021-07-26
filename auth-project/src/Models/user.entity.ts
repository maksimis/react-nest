import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class User {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 500 })
  firstName: string;

  @Field()
  @Column('text')
  surname: string;

  @Field()
  @Column({unique: true})
  email: string;
  
  @Column()
  hashedPassword: string;
}
