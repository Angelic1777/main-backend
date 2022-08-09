const express = require('express');

//  controller functions
const {signupUser, loginUser} = require('../constrollers/userController')

const router = express.Router();
const user = require('../controllers/user');

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router
