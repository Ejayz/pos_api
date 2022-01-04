import crypto from 'crypto'
export default function uid_generator(){
return crypto.randomUUID();
}