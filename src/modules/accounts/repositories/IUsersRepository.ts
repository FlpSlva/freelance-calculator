import { ICreateUserDto } from "../dtos/CReateUserDTO";
import { User } from "../entities/User";








interface IUsersRepository {

    create(data: ICreateUserDto): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;

}
export {IUsersRepository}