const mysql = require('mysql');

module.exports = mysql.createConnection({
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.MYSQL_DB || 'blogsite',
    multipleStatements: true
});