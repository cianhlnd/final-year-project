const express = require("express");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const db = require('./DBConnection')
var app = express();
app.use(bodyParser.json())
const port = 3001;
app.use(cookieParser())
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
var apiRoutes = require("./routes/apiRoutes");
app.use("/api/v1/public",apiRoutes);
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});