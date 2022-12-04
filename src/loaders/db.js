import Mongoose from 'mongoose'
import User from '../models/User'

const db = Mongoose.connection

db.once('open', () => {
  console.log('Connected to db!')

  // uncommet bottom line if you want a quick login
  // seedUser()
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

// eslint-disable-next-line no-unused-vars
const seedUser = async () => {
  await User.deleteMany({})
  console.log('deleted all users')

  const user = {
    name: 'John Doe',
    email: 'johndoe@domain.com',
    password: '1234567',
  }

  await User.create(user)
  console.log('your admin info')
  console.log(user)

  db.close()
  process.exit()
}

export { connectDB }
