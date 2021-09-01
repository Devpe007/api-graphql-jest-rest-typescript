import { CreateUserService } from "./create-user-service";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

describe('Create User', () => {
    let createUserService = new CreateUserService();

    it("should be able to create a new user", async () => {
        const userData: ICreateUserDTO = {
            name: 'Gustavo',
            email: 'gustavo@gmail.com',
            password: 'teste',
        };

        const user = await createUserService.execute(userData);

        console.log(userData);

        expect(user).toHaveProperty('id');
        expect(user.name).toBe('Gustavo');
    });

    it("should not be able to create an existing user", async () => {
        const userData: ICreateUserDTO = {
            name: 'Exists Name',
            email: "existsemail@gmail.com",
            password: "textexisting",
        };

        await createUserService.execute(userData);

        await expect(createUserService.execute(userData)).rejects.toEqual(
            new Error('User Alreary Exists')
        );
    });
});