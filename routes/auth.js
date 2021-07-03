const express = require('express');
const router = express.Router();
const authController =require('../controllers/auth');
router.post('/userSignup',authController.register);
router.post('/signIn',authController.signin);

module.exports = router;