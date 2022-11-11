import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('user', schema)
