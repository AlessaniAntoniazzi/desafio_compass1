import express, {Request, Response} from 'express'
import { routers } from './routes/tutorRoutes';

const app = express();
const port = 8000;

app.use(express.json())
app.use("/", routers)

app.listen(port, () => {
    console.log("asdlnwefei")
})