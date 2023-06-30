const express = require('express');
const router = new express.Router();
const Donor = require('../models/student');
const Student = require('../models/student1');
const Receiver = require('../models/student2');
const Contact = require('../models/student3');
const Registration = require('../models/registration');
const Login = require('../models/login');
const Camp = require('../models/camp');
const Doctor = require('../models/doctorreg');
const Medicine = require('../models/ordermed');
require('../db/online blood bank');


// student

router.post('/student', (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.get("/student", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData);
    } catch (err) {
        res.send(err);
    }
})


router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Student.findById(_id);
        res.send(studentsData);
        console.log(studentsData);

    } catch (err) {
        res.send(err);
    }
})


router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData2 = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(studentsData2);
        console.log(studentsData2);

    } catch (err) {
        console.status(400).log(err);
    }
})


router.delete("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
})

// donor

router.get("/donor", async (req, res) => {
    try {
        const donationData = await Donor.find();
        res.send(donationData);
    } catch (err) {
        res.send(err);
    }
})


router.get("/donor/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Donor.findById(_id);
        res.send(studentsData);
        console.log(studentsData);

    } catch (err) {
        res.send(err);
    }
})


router.post('/donor', (req, res) => {
    console.log(req.body);
    const user = new Donor(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.patch("/donor/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData2 = await Donor.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(studentsData2);
        console.log(studentsData2);

    } catch (err) {
        console.status(400).log(err);
    }
})


router.delete("/donor/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Donor.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
})

// receiver

router.get("/receiver", async (req, res) => {
    try {
        const adminData = await Receiver.find();
        res.send(adminData);
    } catch (err) {
        res.send(err);
    }
})


router.get("/receiver/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Receiver.findById(_id);
        res.send(studentsData);
        console.log(studentsData);

    } catch (err) {
        res.send(err);
    }
})


router.post('/receiver', (req, res) => {
    console.log(req.body);
    const user = new Receiver(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.patch("/receiver/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData2 = await Receiver.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(studentsData2);
        console.log(studentsData2);

    } catch (err) {
        console.status(400).log(err);
    }
})


router.delete("/receiver/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Receiver.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
})


// contact

router.get("/contact", async (req, res) => {
    try {
        const adminData = await Contact.find();
        res.send(adminData);
    } catch (err) {
        res.send(err);
    }
})


router.get("/contact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Contact.findById(_id);
        res.send(studentsData);
        console.log(studentsData);

    } catch (err) {
        res.send(err);
    }
})


router.post('/contact', (req, res) => {
    console.log(req.body);
    const user = new Contact(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.patch("/contact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData2 = await Contact.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(studentsData2);
        console.log(studentsData2);

    } catch (err) {
        console.status(400).log(err);
    }
})


router.delete("/contact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Contact.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
})


// Registration

router.get("/user", async (req, res) => {
    try {
        const adminData = await Registration.find();
        res.send(adminData);
    } catch (err) {
        res.send(err);
    }
})


router.get("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Registration.findById(_id);
        res.send(studentsData);
        console.log(studentsData);

    } catch (err) {
        res.send(err);
    }
})


router.post('/user', (req, res) => {
    console.log(req.body);
    const user = new Registration(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.patch("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData2 = await Registration.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(studentsData2);
        console.log(studentsData2);

    } catch (err) {
        console.status(400).log(err);
    }
})


router.delete("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Registration.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
})


// Login

router.post('/login', (req, res) => {
    console.log(req.body);
    const user = new Login(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.get("/login", async (req, res) => {
    try {
        const Data = await Login.find();
        res.send(Data);
    } catch (err) {
        res.send(err);
    }
})


router.get("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Login.findById(_id);
        res.send(studentsData);
        console.log(studentsData);

    } catch (err) {
        res.send(err);
    }
})


router.delete("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Login.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
})


// Donation Camp

router.post('/camp', (req, res) => {
    console.log(req.body);
    const user = new Camp(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


router.get("/camp", async (req, res) => {
    try {
        const Data = await Camp.find();
        res.send(Data);
    } catch (err) {
        res.send(err);
    }
})


router.delete("/camp/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Camp.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteData);
            console.log(deleteData);
        }

    } catch (err) {
        res.status(500).send(err);
    }
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