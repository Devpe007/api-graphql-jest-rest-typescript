import { v4 as uuid } from 'uuid';

import { User } from "../../entities/User";
import { IUserResopositoryInMemory } from "./interface/IUserRespositoryInMemory";

export class UserRepositoryInMemory implements IUserResopositoryInMemory{
    private users: User[] = [];

    async createUser(user: User): Promise<User> {
        Object.assign(user, {
            id: uuid(),
        });

        this.users.push(user);
        return user;
    };

    async findUser(email: string): Promise<boolean> {
        const user = this.users.some((user) => user.email === email);
        return user;
    };
};