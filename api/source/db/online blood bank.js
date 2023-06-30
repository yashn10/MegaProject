const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


const DB = process.env.DB

mongoose.connect(DB).then(() => {
    console.log("connection successfull");
}).catch((error) => {
    console.log("error", error);
});

