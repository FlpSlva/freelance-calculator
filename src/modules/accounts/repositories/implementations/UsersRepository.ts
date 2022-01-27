import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/CReateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";







class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }


    async create({email, name, password}: ICreateUserDto): Promise<void> {
        
        const user = this.repository.create({email, name, password})

        await this.repository.save(user)

    }


    async findByEmail(email: string): Promise<User> {
        
        const EmailAlreadyExists = await this.repository.findOne({email})

        return EmailAlreadyExists


    }




    async findById(id: string): Promise<User> {

        const user_id = await this.repository.findOne(id)

        return user_id;
    }

}