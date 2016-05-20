// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3087;
var session  = require('express-session');;
var bodyParser = require('body-parser');
var multer  = require('multer');
var exphbs  = require('express3-handlebars');

app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
app.use(session({ secret: 'loginTracking' })); // session secret


app.use(express.bodyParser());
app.use(express.methodOverride());

var hbs = exphbs.create({
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//set the static files page
app.use(express.static('assets'));


//Implement the routes for the views
require('./routes.js')(app);
// launch ======================================================================
app.listen(port);
console.log('Server on port ' + port);