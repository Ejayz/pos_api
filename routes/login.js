import schemas from '../schema/login_validator.js';
import hasher from '../functions/hasher.js';
import { authenticateRequest, generateAccessToken } from '../jwt_function/index.js'
import handleCookie from '../functions/cookie_handler.js';



export default async function (fastify, opts) {
    fastify.post('/login', schemas.loginData, (request, reply) => {
        let {
            username,
            password,
            keepmelogin
        } = request.body
        password = hasher(password);
        const data = [username, password];
        let query = "SELECT * FROM user_accounts WHERE USERNAME=? AND PASSWORD=? AND IS_EXIST='true'"
        query = fastify.mysql.format(query, data);
        fastify.mysql.query(query, (err, result) => {
            if (result.length !== 0) {
                const hashable = result[0].ID;
                const jwtoken = generateAccessToken({ userid: `${hashable}` })

                reply
                    .send({
                        message: "Welcome " + result[0].USERNAME + " .",
                        token: jwtoken
                    })

            } else {
                reply.send({
                    message: "Wrong username or password."
                    , code: '401',

                })
            }
        })


    })
}
