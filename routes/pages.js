const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});
router.get('/userSignup',(req,res)=>{
    res.render('userSignup');
});
router.get('/signIn',(req,res)=>{
    res.render('signIn');
});
module.exports = router;