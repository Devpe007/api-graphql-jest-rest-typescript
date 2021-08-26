import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import { UserRepository } from "../../../repositories/user-repository";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

export class CreateUserService {
    async execute(data: ICreateUserDTO) {
        const usersRepositories = getCustomRepository(UserRepository);

        const userAlreadyExists = await usersRepositories.findOne({
            email: data.email,
        });

        if(userAlreadyExists) {
            throw new Error('User already Exists');
        };

        const passwordHash = await hash(data.password, 8);
        
        const user = usersRepositories.create({
            name: data.name,
            email: data.email,
            password: passwordHash,
        });

        await usersRepositories.save(user);

        return user;
    };
};