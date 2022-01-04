import jwt from 'jsonwebtoken'
import { keys } from '../rsa_generator/index.js'

function generateAccessToken(credintials) {

    return jwt.sign(credintials, keys.privateKey)
}

function authenticateRequest(request) {
    const header = request.headers.authorization
    const token = header.split(" ")[1]
    if (token == null) return 401;
    jwt.verify(token, keys.privateKey, (err, id) => {
        if (err) return 401;
        return id
    })
}
export {
    generateAccessToken, authenticateRequest
}