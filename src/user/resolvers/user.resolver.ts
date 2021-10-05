import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../database/entities/user.entity';
import { UserService } from '../services/user.service';
import { PropertyMetadata } from '../../common/models/property-metadata';
import { BaseResolver } from '../../libs/base.resolver';

@Resolver((of) => User)
export class UserResolver extends BaseResolver {
  constructor(private userService: UserService) {
    super();
  }

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Query((returns) => [PropertyMetadata])
  userProperties(): PropertyMetadata[] {
    return this.userService.getUserProperties();
  }
}
