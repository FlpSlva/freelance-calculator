import express from 'express'
import { router }  from './routes';

import './database'
import './shared/container'

import { AppError } from "./errors/AppError";


const app = express();
const port = 3333;


app.use(express.json())
app.use(router);

app.listen(port, () => console.log("server is running on port", port));