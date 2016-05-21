//import the required modules for the Web App to run
var express  = require('express');
var fs = require('fs');
var formidable = require("formidable");
var bodyParser = require("body-parser");
var multer  = require('multer');
var Q = require('q');
var conf = require('./configuration');
var conf_post = require('./configuration_post')

var sess;

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

    app.get('/', function (req, res) {
        res.redirect('/login');
    })


    //===============================
    //RENDER THE LOGIN PAGE
    //===============================
    app.get('/login', function (req, res) {
        sess = req.session;       
        if(sess.username == ""){
            res.render('login.handlebars',{message: "Username or password wrong!"});
        }
        res.render('login.handlebars');
    })
    
    

    //===============================
    //RENDER THE CONFIGURATION PAGE
    //===============================
    
    app.get('/configuration', function (req, res) {        
        sess = req.session;
        if(typeof sess.username == 'undefined')
        {
            res.redirect('/login');
        }
        res.render('configuration.handlebars',{ username: sess.username, conf: conf });
    })

    app.post('/configuration', function (req, res) {        
        sess = req.session;
        if(typeof sess.username == 'undefined')
        {
            res.redirect('/login');
        }
        conf_post.update_options(req);
        conf = require('./configuration');
        res.render('configuration.handlebars',{ conf: conf});
    })
    
    //=========================================
    //RENDER login page when you do the logout
    //=========================================
    app.get('/logout', function (req, res) {
        //destroy the session before redirecting to the login page
        req.session.destroy();
        res.redirect('/login');
    })
    
    //===============================
    //RENDER THE UPLOAD PAGE
    //===============================
    app.get('/upload', function (req, res) {
       res.render('upload.html');
    })
    
    //==========================================
    //MANAGE THE POST ACTION FOR THE LOGIN PAGE
    //==========================================
    app.post('/loginPost', urlencodedParser, function (req, res) {
        
        sess = req.session;
        
        // Asynchronous read from config.json file
        var obj = JSON.parse(fs.readFileSync('config/config.json', 'utf8'));
        
        // Prepare output in JSON format
       response = {
           username:req.body.username,
           password:req.body.password
       };
        
        if(obj.authentication.username == response.username && obj.authentication.password == response.password){
            //Save the username in a session variable and does the redirect to the configuration page
            sess.username = response.username;
            res.redirect('/configuration');
        }
        else{
            console.log("username or password wrong!!!");
            sess.username = "";
            res.redirect('/login');
        }
       res.end(JSON.stringify(response));
    })

    //==========================================
    //MANAGE THE POST ACTION FOR THE UPLOAD PAGE
    //==========================================
    /*app.post('/fileUpload',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});*/
}