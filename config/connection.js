var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'taffy182!',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting:', err.stack);
        return;
    }

    console.log('You are connected on', connection.threadId)
});

module.exports = connection;