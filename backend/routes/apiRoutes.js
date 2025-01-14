const express = require("express");
const {passwordCheck,generateHash} =  require('../encryptUtility.js');
var jwt = require('jsonwebtoken');
var UserModel = require('../models/user.js')
require("dotenv").config();
var router  = express.Router();
//Middleware
router.use(function(req, res, next) {
    next();
});
//Registration route
router.route("/register") 
    .post(function(req,res){ 
        var newUser = new UserModel(req.body);
        var response = {};
        newUser.save()
    .then(() => {
        response.status = "ok";
        response.message = "User " + newUser.username + " has been created";
        //Token creation
        var token = jwt.sign({ email: newUser.email, username: newUser.username }, process.env.Secret_Key);
        //Token sent back as a http-only cookie
        res.cookie('appjwt', token, { httpOnly: true })
        response.email = newUser.email;
        res.status(201).send(response);
    })
    .catch((error) => {
        response.status = "error";
        response.message = error;
        console.log(error);
        res.status(200).send(response);
    });
    })
//Login Route
router.route("/login") 
    .post(async function(req,res){ 
        const{email, password} = req.body
        //Avoid case sensitivity
        upperEmail = email.toUpperCase()
        var response = {};
        if(!(upperEmail && password)){
            response.status = "error";
            response.message = "Email and password are required";
            res.status(200).send(response)
            return;
        }
        const user = await UserModel.findOne({ email : upperEmail });
        //Checks for correct password
        if(!user || !passwordCheck(password,user.password)){
            response.status = "error";
            response.message = "Incorrect password or email";
            res.status(401).send(response)
        }else{
            var token = jwt.sign({ email: user.email, username: user.username }, process.env.Secret_Key);
            response.status = "ok";
            res.cookie('appjwt',token,{httpOnly:true})
            response.email = user.email;
            response.message = "Authenticated";
            res.status(200).send(response);
        }
    })
module.exports = router;