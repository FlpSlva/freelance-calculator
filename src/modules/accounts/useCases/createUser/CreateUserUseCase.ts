import { inject, injectable } from "tsyringe";
import {hash} from 'bcrypt'
import { AppError } from "../../../../errors/AppError";
import { ICreateUserDto } from "../../dtos/CReateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";





@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private createUserUseCase: IUsersRepository
    ) {}

    async execute({email, name, password}: ICreateUserDto): Promise<void>{


        const EmailAlreadyExists = await this.createUserUseCase.findByEmail(email)

        if(EmailAlreadyExists){
            throw new AppError("User Already Exists !",)
        }

        const passwordHash = await hash(password, 8)

        await this.createUserUseCase.create({
            email, 
            name,
            password: passwordHash
        })

    }



}

export {CreateUserUseCase}