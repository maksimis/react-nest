# Описание демо проекта
В приложении присутствует авторизация и аутентификация. Авторизованный пользователь может увидеть список зарегестрированных пользователей на главной странице
____
## Запуск приложения.
Для запуска приложения необходимо открыть командную строку.
В командной строке перейти в папку server и выполнить команду nest start.
Далее перейти в папку client и выполнить команду npm start.
____
## Чувствительная информация
В server/src/auth/сonstants/jwtConstants.ts/ напишите свой secret

Для использования готовой тестовой базы в ormconfig.json необходимо вставить следующее:

в переменную "host": "ec2-54-228-139-34.eu-west-1.compute.amazonaws.com"
в переменную "username": "vpsvwznvpnkqok"
в переменную "password": "48b1e3b0b5ea76f8fafafd3834a2509900659c0ed21b7a28b8c22e435f87433d"
в переменную "database": "d50m4afut9etou"

Тестовый пользователь в базе данных: login test@test.ru пароль 1234567

![img.png](img.png)
![img_1.png](img_1.png)
![img_2.png](img_2.png)
![img_3.png](img_3.png)