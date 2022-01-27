import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';


@Entity("users")
class User {

    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string

    created_at: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export {User}