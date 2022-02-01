import { Router } from "express";
import { AuthenticatedUserController } from "../../modules/accounts/useCases/authenticateUser/AuthenticatedUseController";

const authenticatedRoutes = Router();
const authenticatedUserController = new AuthenticatedUserController()



authenticatedRoutes.post("/sessions", authenticatedUserController.handle)


export {authenticatedRoutes};