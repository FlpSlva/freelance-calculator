import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/CReateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";







class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}