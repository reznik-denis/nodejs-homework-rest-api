const express = require('express')
const router = express.Router()
const usersController = require('../../../controllers/users')
// const validate = require('./validation')

router.post('/register', usersController.reg)
router.post('/login', usersController.login)
router.post('/logout', usersController.logout)

module.exports = router
