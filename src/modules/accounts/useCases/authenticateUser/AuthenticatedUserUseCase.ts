import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {

    email: string
    password: string

}

interface IResponse {
    user: {
        name: string
        email: string
    },
    token: string
}


@injectable()
class AuthenticatedUserUseCase {


    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    

    async execute({email, password}: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new AppError("Email or Password incorrect !")
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath) {
            throw new AppError("Email or Password incorrect !");
        }

        const token = sign({}, "f000ce65582b316a4d4a701ea31a98b9", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;


    }


}


export {AuthenticatedUserUseCase}