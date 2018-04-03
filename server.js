// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

// Set up static content from the public directory
app.use(express.static('public'));

// Set up bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import router
var routes = require('./controllers/burgers_controller.js')

app.use(routes);

// Start up the server and notify server-side that it is running
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});