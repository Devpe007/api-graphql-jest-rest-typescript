import { CreateUserService } from "./services/create-user-service";
import { CreateUserController } from "./controllers/create-user-controller";

const createUserService = new CreateUserService();

const createUserController = new CreateUserController(
    createUserService,
);

export { createUserService, createUserController };