import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user.model'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const registerNewUser = async ({ name, email, password }: User) => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return 'ALREADY_USER'

  const passHash = await encrypt(password)

  const registerNewUser = await UserModel.create({ name, email, password: passHash })

  return registerNewUser
}

const loginUser = async ({ email, password }: Auth) => {
  try {
    const checkIs = await UserModel.findOne({ email })

    if (!checkIs) return 'NOT_FOUND_USER'

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if (!isCorrect) throw new Error('PASSWORD_INCORRECT')

    const token = await generateToken(checkIs.email)
    console.log(token)

    const data = {
      token,
      user: checkIs
    }

    return data
  } catch (error) {
    throw error
  }
}

export { registerNewUser, loginUser }
