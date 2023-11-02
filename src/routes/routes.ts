import { Router } from 'express'
import userRouter from '../app/controllers/UserController'



const routers = Router();
routers.use('/users', userRouter);
routers.use('/users/:cnpj', userRouter)
routers.use('/users/:cnpj', userRouter)
routers.use('/users', userRouter)
routers.use('/users', userRouter)

export default routers