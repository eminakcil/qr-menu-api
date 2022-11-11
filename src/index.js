import path from 'path'

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'

import config from './config'
import loaders from './loaders'
import errorHandler from './middlewares/errorHandler'

import ApiRoutes from './routes'

config()
loaders()

const PORT = process.env.APP_PORT

const app = express()

app.use(
  fileUpload({
    createParentPath: true,
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(helmet())
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.listen(PORT, () => {
  console.log('\n'.repeat(process.stdout.rows - 2 - 2))
  console.log(`App listening on port ${PORT}`)
  app.use('/api', ApiRoutes)
  app.use(errorHandler)
})
