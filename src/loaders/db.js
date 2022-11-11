import Mongoose from 'mongoose'

const db = Mongoose.connection

db.once('open', () => {
  console.log('Connected to db!')
})

const connectDB = async () => {
  await Mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useNewurlParser: true,
      useUnifiedTopology: true,
    }
  )
}

export { connectDB }
