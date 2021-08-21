import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import { middlewareError } from './middlewares/error/Error';

import '@modules/database/connect';

import { routes } from './routes/routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewareError);

export { app };