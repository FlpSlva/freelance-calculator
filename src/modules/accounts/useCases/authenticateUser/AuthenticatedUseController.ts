import {Request, Response} from 'express'
import { container } from 'tsyringe'
import { AuthenticatedUserUseCase } from './AuthenticatedUserUseCase'



class AuthenticatedUserController {


    async handle(req: Request, res: Response): Promise<Response>{

        const {email, password} = req.body

        const authenticatedUserUseCase = container.resolve(AuthenticatedUserUseCase);

        const token = await authenticatedUserUseCase.execute({
            email,
            password
        })

        return res.status(201).json(token);



    }


}

export {AuthenticatedUserController}