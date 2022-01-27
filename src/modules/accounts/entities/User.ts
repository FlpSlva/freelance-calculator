import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';



class User {

    id?: string

    name: string

    password: string

    email: string

    created_at: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export {User}