import { Request, Response } from "express";

import { CreateUserService } from "../services/create-user-service";

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService,
    ) {};

    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        try {
            const user = await this.createUserService.execute({
                name,
                email,
                password,
            });

            return response.status(201).json(user);
        } catch(error) {
            return response.sendStatus(400).json({
                message: error.message || 'Unexpected error',
            });
        };
    };
};