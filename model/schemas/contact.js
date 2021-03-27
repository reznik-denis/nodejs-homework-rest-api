const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose
const mongoosePaginate = require('mongoose-paginate-v2')

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact']
  },
  email: {
    type: String,
    required: [true, 'Set email for contact']
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
    min: 1,
    max: 17
  },
  subscription: {
    type: String,
    default: 'free',
  },
  password: {
    type: String,
    required: [true, 'Set password for contact'],
    min: 1,
    max: 17
  },
  token: {
    type: String,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  },
}
)
contactSchema.plugin(mongoosePaginate)
const Contact = model('contact', contactSchema)

module.exports = Contact
