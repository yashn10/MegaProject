const express = require('express');
const router = new express.Router();
const Doctor = require('../models/doctorreg');
const Medicine = require('../models/ordermed');
require('../db/db');


router.get('/', (req, res) => {
    res.json("hello world");
})


// Doctor

router.post('/doctor', (req, res) => {
    console.log(req.body);
    const user = new Doctor(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


// doctor login

// router.post('/doclogin', (req, res) => {
//     console.log(req.body);
//     const user = new Doctorlogin(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err);
//     })
// })


// router.get("/doclogin", async (req, res) => {
//     try {
//         const Data = await Doctorlogin.find();
//         res.send(Data);
//     } catch (err) {
//         res.send(err);
//     }
// })


router.post('/order', (req, res) => {
    console.log(req.body);
    const user = new Medicine(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.get("/order", async (req, res) => {
    try {
        const Data = await Medicine.find();
        res.send(Data);
    } catch (err) {
        res.send(err);
    }
})



module.exports = router;