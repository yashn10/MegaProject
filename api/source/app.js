const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config({ path: '../config.env' });
const PORT = process.env.PORT;
const studentRouter = require('./routes/routes.js');
const mongoose = require('mongoose');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
    res.header("Access-Control-Allow-Origin' 'http://localhost:4200' always");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

require('./db/online blood bank.js');

app.use(cors());
app.use(express.json());
app.use(studentRouter);

app.listen(PORT, () => {
    console.log('connection is set up at port No:', PORT);
})
