import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'ec2-54-228-139-34.eu-west-1.compute.amazonaws.com',
        port: 5432,
        username: 'vpsvwznvpnkqok',
        password:
          '48b1e3b0b5ea76f8fafafd3834a2509900659c0ed21b7a28b8c22e435f87433d',
        database: 'd50m4afut9etou',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
