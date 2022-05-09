const express = require('express');
const student = require('../models/student');
const router = express.Router();

//!This is a HTTP GET request which fetch all data from student collection and pass in json format
router.get('/', async(req,res) => {
    try {
        res.send("working...")
    } catch (error) {
        res.send("Error : "+error);
    }
})

module.exports = router;