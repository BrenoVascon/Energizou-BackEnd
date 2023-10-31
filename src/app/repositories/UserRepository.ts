import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}

const createNewUser = async (data: Partial<IUser>): Promise<IUser> => {
    const newUser = userRepository.create(data);
    await userRepository.save(newUser);
    return newUser;
}

const getUsersByCnpj = async (cnpj: string): Promise<IUser | undefined> => {
    return userRepository.findOne({
        where: { CNPJ: cnpj }
    });
}

const deleteByCNPJ = async (cnpj: string): Promise<boolean> => {
    const user = await userRepository.findOne({
        where: { CNPJ: cnpj }
    });

    if (user) {
        try {
            await userRepository.remove(user);
            return true; 
        } catch (error) {
            console.error(error);
            return false; 
        }
    } else {
        return false; 
    }
}




export default { getUsers,getUsersByCnpj, deleteByCNPJ, createNewUser }