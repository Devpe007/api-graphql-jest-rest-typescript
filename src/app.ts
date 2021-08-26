import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from 'schemas/resolvers';
import typeDefs from 'schemas/schemas';

import { middlewareError } from './middlewares/error/Error';

import './modules/database/connect';

import { routes } from './routes/routes';

const app = express();

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

app.use(express.json());

app.use(routes);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use(middlewareError);

export { app };