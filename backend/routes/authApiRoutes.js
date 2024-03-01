const express = require("express");
const path = require('path');
const {passwordCheck,generateHash} =  require('../encryptUtility.js');
var jwt = require('jsonwebtoken');
var UserModel = require('../models/user.js')
require("dotenv").config();
var router  = express.Router();

router.use(async function(req, res, next) {
    if(req.cookies == null || req.cookies.appjwt == null){
        res.status(401).json({error: "No authentication token"})
        return;
    }
    const token = req.cookies.appjwt;
    try{
        const tokenDecoded = jwt.verify(token,process.env.Secret_Key)
        if(tokenDecoded == null || tokenDecoded.username == null){
            res.status(401).json({error: "Malformed or invalid token"})
            return;
        }
        var user = await UserModel.findOne({username: tokenDecoded.username});
        if(!user){
            res.status(401).json({error: "User does not exist"})
            return;
        }
        req.user = user;
        next();
    }catch(err){
        res.status(401).json({error: "Malformed or invalid token"})
        return;
    }
});
/*router.route("/authenticate")
    .get(function(req,res){
        //console.log(req.user);
        res.status(200).json({username:req.user.username, data: req.user.data});
    })*/
router.route("/logout")
    .get(function(req,res){
        res.clearCookie('appjwt');
        res.status(200).json({message:"Logged out"});
    })

module.exports = router;