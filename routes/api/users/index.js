const express = require('express')
const router = express.Router()
const usersController = require('../../../controllers/users')
const guard = require('../../../helpers/guard')
// const validate = require('./validation')
const { limiter } = require('../../../helpers/rate-limit-reg')

router.post('/register', limiter, usersController.reg)
router.post('/login', usersController.login)
router.post('/logout', guard, usersController.logout)

module.exports = router
