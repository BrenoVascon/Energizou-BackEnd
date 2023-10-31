import { Router } from 'express'
import userRouter from '../app/controllers/UserController'


const routers = Router();
routers.use('/users', userRouter);
routers.use('/users/:CNPJ', userRouter)
routers.use('/:DeleteByCNPJ', userRouter)
routers.use('/:createUser', userRouter)


export default routers