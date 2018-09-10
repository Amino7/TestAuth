const express = require('express');
const alexa = express.Router();


alexa.use((req,res,next)=>{
    res.send("Hi, I am Alexa.");
});


module.exports = alexa;