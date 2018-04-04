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

router.put('/api/burgers/:id', (req, res) => {
    var condition = 'id =' + req.params.id

    console.log('condition', condition);

    burger.update(condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router

