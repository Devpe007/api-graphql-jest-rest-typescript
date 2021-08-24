export class UserEntityInMemory {
    id?: string;
    name: string;
    email: string;
    password: string;

    private constructor({ name, email, password }) {
        return Object.assign(this, {
            name,
            email,
            password,
        });
    };

    static create({ name, email, password }) {
        const user = new UserEntityInMemory({ name, email, password });
        return user;
    };
};