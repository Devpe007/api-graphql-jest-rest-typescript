import { Router } from "express";

import { createUserController } from '../modules/useCases/user';

const routes = Router();

routes.post('/cadastro', (request, response) => {
    return createUserController.handle(request, response);
});

export { routes };