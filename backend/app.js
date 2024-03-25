const express = require("express");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const db = require('./DBConnection')
var app = express();
app.use(bodyParser.json())
//Port number for server to listen to
const port = 3001;
app.use(cookieParser())
//Allows the front-end and back-end to communicate when hosted separately
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
//Routes imported from different modules
var apiRoutes = require("./routes/apiRoutes");
var authApiRoutes = require("./routes/authApiRoutes");
var reviewRoutes = require("./routes/reviewRoutes");
//Mount the route handlers for different parts of the API
app.use("/api/v1/public",apiRoutes);
app.use("/api/v1/user",authApiRoutes);
app.use("/api/v1/reviews", reviewRoutes);
//Start the server and listen on port 3001
app.listen(port, () => { 
    console.log(`App is listening on port ${port}`);
});