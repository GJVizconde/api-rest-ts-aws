import mongoose from 'mongoose'
import { DB_URI } from './env.config'

async function dbConnect(): Promise<void> {
  try {
    await mongoose.connect(DB_URI)
    console.log('Db is connected')
  } catch (error) {
    console.log('An error ocurred during database connection', error)
  }
}

export default dbConnect
