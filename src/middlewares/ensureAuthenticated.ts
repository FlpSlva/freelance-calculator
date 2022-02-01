import {Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload{
    sub: string
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new AppError("Token Missing", 401);
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub: user_id} = verify(token, "f000ce65582b316a4d4a701ea31a98b9") as IPayload

        const usersRepository = new UsersRepository()

        const user = await usersRepository.findById(user_id)

        if(!user){
            throw new AppError("User does not exists !", 401);
        }



        next()
    }catch {
        throw new AppError("Invalid Token", 401)
    }

}