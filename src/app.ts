import express from 'express'
import { routersTutors } from './routes/tutorRoutes';
import { routersPets } from './routes/petRoutes';

const app = express();
const port = 8000;

app.use(express.json())
app.use("/", routersTutors)
app.use("/", routersPets)

app.listen(port, () => {
    console.log("server started")
})