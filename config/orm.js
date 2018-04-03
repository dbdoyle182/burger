var connection = require('../config/connection.js');

var orm = {
    selectAll: (tableInput, cb) => {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: () => {},
    updateOne: () => {}
}

orm.selectAll('burgers', (result) => {
    console.log(result);
});

module.exports = orm;