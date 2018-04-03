var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'taffy182!',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) throw err;

    console.log('You are connected on', connection.threadId)
});

module.exports = connection;