import express from 'express'
import { router }  from './routes';

import './database'
import './shared/container'

import { AppError } from "./errors/AppError";


const app = express();
const port = 3333;


app.use(express.json())
app.use(router);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    
    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`
    })

})

app.listen(port, () => console.log("server is running on port", port));