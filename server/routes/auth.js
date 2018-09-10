const express = require('express');
const auth = express.Router();


auth.use((req,res,next)=>{
    res.send("Hi, I am Alexa.");
});


module.exports = auth;