import { User } from "@modules/entities/User";

export interface IUserResopositoryInMemory {
    createUser(user: User): Promise<User>;
    findUser(email: string): Promise<boolean>;
};