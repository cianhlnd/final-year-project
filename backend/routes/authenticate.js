const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
require("dotenv").config();
//Same as middleware in authApiRoutes, made into a const instead to help with reviewRoutes
const authenticate = async (req, res, next) => {
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
};

module.exports = authenticate;