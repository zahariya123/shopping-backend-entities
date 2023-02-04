/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany } from "typeorm";
import { EntityBase } from "./entityBase";

@Entity()
export class User extends EntityBase {

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @Column()
    password: string;

}