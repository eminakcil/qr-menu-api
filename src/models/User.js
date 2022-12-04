import { Schema, model } from 'mongoose'
import { passwordToHash } from '../scripts/utils/helper'

const schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

schema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = passwordToHash(this.password)
  }
  next()
})

export default model('user', schema)
