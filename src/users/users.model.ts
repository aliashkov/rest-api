import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttributes {
    email: string;
    password : string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {
    @ApiProperty({example : '1' , description : 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : number;

    @ApiProperty({example : 'art1699584@gmail.com' , description : 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example : 'artem6835385' , description : 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password : string;


    @ApiProperty({example : 'false' , description : 'Пользователь заблокирован'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned : boolean;

    @ApiProperty({example : 'trolling' , description : 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason : string;

    @BelongsToMany(() =>Role, () => UserRoles)
    roles : Role[]
}