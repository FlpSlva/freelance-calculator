import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/CReateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";







class UsersRepository implements IUsersRepository {
    create(data: ICreateUserDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}