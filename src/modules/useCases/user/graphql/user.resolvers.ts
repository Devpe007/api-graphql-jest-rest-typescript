import { container } from "tsyringe";

import { CreateUserService } from "../services/create-user-service";

const usersResolvers = {
    Query: {

    },
    Mutation: {
        createUser(_, { input }) {
            const createUserService = container.resolve(CreateUserService);

            const user = createUserService.execute(input);

            return user;
        },
    },
}

export default usersResolvers;