import crypto from 'node:crypto'
export default function hasher(pswd){
return crypto.createHash('sha256').update(pswd).digest("base64");
}