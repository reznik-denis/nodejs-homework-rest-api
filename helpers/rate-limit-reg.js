const rateLimit = require('express-rate-limit')
const { HttpCode } = require('./constants')

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 2,
  handler: (req, res, next) => {
    return res.status(HttpCode.BAD_REQUEST).json({
      status: 'error',
      code: HttpCode.BAD_REQUEST,
      data: 'Bad request',
      message: 'Too many registrations. Try again later.',
    })
  }
})

module.exports = { limiter }
