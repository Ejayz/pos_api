import dotenv from 'dotenv'
dotenv.config()

const keys = {
    privateKey: process.env.private_key,
    publicKey: process.env.publicKey
}


export {
keys
}