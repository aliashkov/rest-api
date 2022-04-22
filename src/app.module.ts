import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
         envFilePath : '.env'  
      }),
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: process.env.SQL_HOST,
        port: Number(process.env.SQL_PORT),
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        autoLoadModels: true,
        synchronize: true,
        models: [User, Role, UserRoles],
      }),
      UsersModule,
      RolesModule,
      AuthModule,
    ],
})

export class AppModule { }