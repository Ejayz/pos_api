import dotenv from 'dotenv'
import mysql from 'mysql';
dotenv.config();
const pool = mysql.createPool({
    connectionLimit: 500,
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    databse: process.env.db_database
});

export default {
pool
}