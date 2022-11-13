import { Schema, model } from 'mongoose'
import Category from './Category'

const schema = new Schema(
  {
    title: String,
    photo: String,
    price: Number,
    description: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

schema.post('save', async (doc, next) => {
  await Category.findOneAndUpdate({ _id: doc.category }, { $push: { products: doc._id } })
  next()
})

export default model('product', schema)
