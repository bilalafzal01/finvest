require('dotenv').config()
import mongoose from 'mongoose'
import { app } from './app'

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined')
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to AUTH mongodb!`)
  } catch (err) {
    console.error(err)
  }

  app.listen(5000, () => {
    console.log(`Listening AUTH on port 5000!`)
  })
}

start()
