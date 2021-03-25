const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bcrypt = require('bcryptjs')
const SOLT_WORK_FACTOR = 8
const { Sub } = require('../../helpers/constants')

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    default: 'Guest'
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
    validate(value) {
      const re = /\S+@\S+\.\S+/
      return re.test(String(value).toLowerCase())
    },
  },
  password: {
    type: String,
    required: [true, 'Password required'],
  },
  subscription: {
    type: String,
    enum: {
      values: [Sub.FREE, Sub.PRO, Sub.PREMIUM],
      message: "It isn't allowed"
    },
    default: Sub.FREE
  },
  token: {
    type: String,
    default: null
  },
},
{
  versionKey: false,
  timestamps: true,
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const salt = await bcrypt.genSalt(SOLT_WORK_FACTOR)
  this.password = await bcrypt.hash(this.password, salt, null)
  next()
})

userSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const User = model('user', userSchema)

module.exports = User
