const express = require('express')
const router = express.Router()
const usersController = require('../../../controllers/users')
const guard = require('../../../helpers/guard')
const upload = require('../../../helpers/upload')
const { validateUploadAvatar } = require('./validation')
const { limiter } = require('../../../helpers/rate-limit-reg')

router.post('/register', limiter, usersController.reg)
router.post('/login', usersController.login)
router.post('/logout', guard, usersController.logout)
router.patch('/avatars', [guard, upload.single('avatar'), validateUploadAvatar], usersController.avatars)

module.exports = router
