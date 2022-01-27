import express from 'express'
import { router }  from './routes';


const app = express();
const port = 3333;


app.use(express.json())

app.listen(port, () => console.log("server is running on port", port));