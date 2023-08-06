const express = require('express');
const router = express.Router()
const authController = require('../controller/auth.controller')
//register a user
router.post("/register", authController.register)
//log in a user
router.post("/login", authController.login)

module.exports = router