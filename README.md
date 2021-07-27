# Описание демо проекта
В приложении присутствует авторизация и аутентификация. Авторизованный пользователь может увидеть список зарегестрированных пользователей на главной странице
____
## Запуск приложения.
Для запуска приложения необходимо открыть командную строку.
В командной строке перейти в папку server и выполнить команду nest start.
Далее перейти в папку client и выполнить команду npm start.
____
## Чувствительная информация
В server/src/auth/сonstants/jwtConstants.ts/ в переменную secret надо записать 'demo-auth-app'
В ormconfig.json необходимо вставить следующее:

"type": "postgres",
  "host": "ec2-54-228-139-34.eu-west-1.compute.amazonaws.com",
  "port": 5432,
  "username": "vpsvwznvpnkqok",
  "password":
    "48b1e3b0b5ea76f8fafafd3834a2509900659c0ed21b7a28b8c22e435f87433d",
  "database": "d50m4afut9etou",
  "migrationsTableName": "migration_table",
  "migrations": ["dist/migration/*.js"],
  "ssl": true,
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "cli": {
    "migrationsDir": "migration"
  },
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
