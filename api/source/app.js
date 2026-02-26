const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, '..', 'config.env') });
const routes = require('./config/routes.js');
const PORT = process.env.PORT;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
    res.header("Access-Control-Allow-Origin' 'http://localhost:4200' always");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

require('./db/db.js');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log('connection is set up at port No:', PORT);
})
