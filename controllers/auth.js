const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const express = require('express');
var session = require('express-session');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const { ENAMETOOLONG } = require('constants');
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const { Console } = require('console');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user:  process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database:  process.env.DATABASE
});

exports.register = (req,res)=>{
 console.log(req.body);
 

 const { name,email,password,address,phoneno} = req.body;
 db.query('SELECT Email FROM users WHERE Email = ?',[email],async (error,results)=>{
     if(error){
         console.log(error);
     }
     if(results.length > 0){
         return res.render('userSignup',{
             message: 'Email already registered'
         })
     }

     let hashedPassword = await bcrypt.hash(password,8);
     console.log(hashedPassword);


     db.query('INSERT INTO users SET ? ',{name:name,email:email,password:hashedPassword,phoneNo:phoneno,address:address},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.redirect('/signIn');
        }
     } )
 });


}

exports.signin = (req,res)=>{

const{ email, password} = req.body;
if(email && password){
db.query("SELECT email,password FROM users WHERE email = ? AND password = ?",[email,password],function(error,results,fields){
    if(error){
        console.log(error);
    }
if(results.length>0){
    // req.session.loggedin = true;
	// req.session.username = username;
    res.redirect('/index');
}else{
    res.send('Incorrect email or Password!');
}
res.end();
});
}else{
    res.send('Please enter Email and Password!');
		res.end();
}
}


