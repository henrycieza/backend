import mysql from 'mysql';

const connectionFactory = mysql.createConnection ({
    host: 'localhost',
    port: 13306,
    user: 'fastcheckin',
    password: 'fastcheckin',
    database: 'fastcheckin',
});

export default connectionFactory; 