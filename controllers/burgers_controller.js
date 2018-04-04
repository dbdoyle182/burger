// Dependencies
var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all((data) => {
        var hbsObject = {
            burgers: data 
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([req.body.name], (result) => {


        res.redirect('/')
    });
});

module.exports = router

