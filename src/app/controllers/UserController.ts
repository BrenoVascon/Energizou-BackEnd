import { Request, Response, Router } from 'express';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/IUser';

const userRouter = Router();

userRouter.post('/users/', async (_req: Request, res: Response): Promise<Response> => { 
    try { 
      const newUser = await UserRepository.createNewUser(_req.body); 
      return res.status(201).json(newUser);
    } catch (error) { 
      console.error(error); 
      return res.status(500).json({ message: 'Erro ao criar o usuário' }); 
    } 
  });
  

userRouter.get('/users/', async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.getUsers();
    return res.status(200).json(users);
});

userRouter.get('/users/:cnpj', async (req: Request, res: Response): Promise<Response> => {
    const cnpj = req.params.CNPJ;
    const user = await UserRepository.getUsersByCnpj(cnpj);

    if (user) {
        return res.status(200).json(user);
    } else {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

userRouter.put('/users/:cnpj', async (req: Request, res: Response): Promise<Response> => {
    const cnpj = req.params.CNPJ;
    const userData = req.body;

    try {
        const user = await UserRepository.getUsersByCnpj(cnpj);

        if (user) {
            UserRepository.updateUser(cnpj, userData);
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao atualizar o usuário' });
    }
});


userRouter.delete('/users/:cnpj', async (req: Request, res: Response): Promise<Response> => {
    const cnpj = req.params.CNPJ;
    const deleted = await UserRepository.deleteByCNPJ(cnpj)

    if (deleted) {
        return res.status(200).json({message: 'Usuário excluído com sucesso'});
    } else {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

export default userRouter;