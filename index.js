//getting all the package 
var express=require("express");
var bodyParser=require('body-parser');
var app = express();

// getting controllers
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var addBookController = require('./controllers/addBook-controller');
var deleteBookController  = require('./controllers/findBook-controller');
var logoutController = require('./controllers/logout-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Register Needs UserName and Password
app.post('/api/register',registerController.register);
// Auth Needs UserName Password
app.post('/api/authenticate',authenticateController.authenticate);

//AddBook needs BookName AuthorName
app.post('/api/addBook',addBookController.addBook);

// Delete Needs BookName
app.delete('/api/deletebook',deleteBookController.getBook);

//Logout Will Need Username Password
app.post('/api/logout',logoutController.logout);
app.listen(8012);           // We Can Choose Any Port I.E.8080