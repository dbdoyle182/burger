// Dependencies
var orm = require('../config/orm.js');

// Constructor
var burger = {

    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    // Values is an array
    create: (values, cb) => {
        orm.insertOne('burgers', 'burger_name', values, (res) => {
            cb(res);
        });
    },

    update: (condition, cb) => {
        orm.updateOne('burgers', condition, (res) => {
            cb(res);
        });
    }

};

// Testing the functionality of above methods

// burger.all((res) => {
//     console.log(res);
// });

// burger.create(['The Googe Burger'], (res) => {
//     console.log(res);
// });

// burger.update('id = 1', (res) => {
//     console.log(res);
// });

// Exports
module.exports = burger;