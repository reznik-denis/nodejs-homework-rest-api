const User = require('./schemas/user')

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

const findById = async (contactId) => {
  return await User.findOne({ _id: contactId })
}

const create = async ({ name, email, password, subscription }) => {
  const user = new User({ name, email, password, subscription })
  return await user.save()
}

const updateToken = async (contactId, token) => {
  return await User.updateOne({ _id: contactId }, { token })
}

const updateAvatar = async (contactId, token) => {
  return await User.updateOne({ _id: contactId }, { token })
}

module.exports = {
  findByEmail,
  create,
  findById,
  updateToken,
  updateAvatar,
}
