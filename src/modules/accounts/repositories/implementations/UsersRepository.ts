import { ICreateUserDto } from "../../dtos/CReateUserDTO";
import { User } from "../../entity/User";
import { IUsersRepository } from "../IUsersRepository";







class UsersRepository implements IUsersRepository {
    create(data: ICreateUserDto): Promise<void> {
        
    }
    findByEmail(email: string): Promise<User> {
       
    }
    findById(id: string): Promise<User> {
        
    }

}