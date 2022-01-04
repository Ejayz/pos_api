import dotenv from 'dotenv';

import pool from './database.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import Autoload from 'fastify-autoload';
import fastifyMySQL from 'fastify-mysql';
import Fastify from 'fastify';
import fastifyCors from 'fastify-cors';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.port;
import cookie from 'fastify-cookie'
const fastify = Fastify({ logger: true });
dotenv.config();

export default async function (fastify, opts) {

    fastify.register(cookie, {
        secret: process.env.privateKey,
    })

    fastify.register(fastifyMySQL, {
        connectionString: `mysql://${process.env.db_user}@${process.env.db_host}/${process.env.db_database}`
    })
    fastify.register(fastifyCors, {
        "Access-Control-Allow-Origin": "http://localhost:8080"
    })

    fastify.register(Autoload, {
        dir: join(__dirname, '/routes/'),
        dirNamRoutePrefix: false,
        options: Object.assign({}, opts)
    })

    fastify.listen(port, () => {
        console.log(`Server is listening in ${port}`);
    })

}