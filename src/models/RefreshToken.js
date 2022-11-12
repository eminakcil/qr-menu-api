import { Schema, model } from 'mongoose'
import { generateRefreshToken } from '../scripts/utils/helper'

const schema = new Schema(
  {
    token: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

schema.statics.createToken = async function (user) {
  const token = generateRefreshToken(user.email)
  const _object = new this({
    token,
    user: user._id,
  })

  console.log(_object)

  const refreshToken = await _object.save()

  return refreshToken.token
}

export default model('refresh-token', schema)
