import { Schema, Types, model, Model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    },
    email: {
      required: true,
      unique: true,
      type: String
    },
    description: {
      type: String,
      default: 'Hola'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const UserModel = model('Users', UserSchema)

export default UserModel
