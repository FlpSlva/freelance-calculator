import {Router} from 'express'
import { usersRoutes } from './accounts/users.routes';
import { authenticatedRoutes } from './accounts/authenticatedUser.routes';
const router = Router();


router.get("/", (req, res) => {
    return res.json({message: "started !"})
})


router.use("/users", usersRoutes);
router.use(authenticatedRoutes);


export {router}