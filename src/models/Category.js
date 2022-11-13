import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    photo: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('category', schema)
