import { Router } from 'express'
import userRouter from '../app/controllers/UserController'



const routers = Router();
routers.use('/', userRouter);


export default routers