// Dependencies
var connection = require('../config/connection.js');

// Prints question marks when multiple inputs, included for future flexibility
var printQuestionMarks = (num) => {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?')
    }

    return arr.toString();
}

// ORM constructor
var orm = {
    // Method to select all data from table in mySQL
    selectAll: (tableInput, cb) => {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Method to insert a new item into table in mySQL
    insertOne: (table, columnName, values, cb) => {
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (' + columnName + ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(values.length);
        queryString += ') '

        console.log(queryString);

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(values)
            cb(result);
        });
    },
    // Method to update an item in table in mySQL
    updateOne: (table, condition, cb) => {
        var queryString = 'UPDATE ' + table;
        queryString += ' SET devoured = true';
        queryString += ' WHERE ' + condition + ';';

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Testing out functions

// orm.selectAll('burgers', (result) => {
//     console.log(result);
// });

// orm.insertOne('burgers', 'burger_name', ['Big Kahuna Burger'], (result) => {
//     console.log(result);
// });

// orm.updateOne('burgers', 'id = 1', (result) => {
//     console.log(result);
// });

// Export
module.exports = orm;