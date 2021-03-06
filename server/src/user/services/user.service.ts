import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({email: email})
  }

  async create(user): Promise<User> {
    return this.userRepository.save(user);
  }

  public getUserProperties(){
    return User.properties;
  }
}
