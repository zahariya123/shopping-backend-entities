/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany } from "typeorm";
import { Content } from "./content.entity";
import { ContentDto } from "../../../backend-refresher-1.0-dtos/src/dtos/content.dto"
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
    password: string;

    @OneToMany(()=>Content,content=>content.user)
    contents: ContentDto[];

}