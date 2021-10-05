import { Connection, Repository } from 'typeorm';
import { User } from 'src/database/entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [Connection],
  },
];
