import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth.service'

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body)
    res.status(200).send(responseUser)
  } catch (e) {}
}

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body
  try {
    const responseUser = await loginUser({ email, password })
    res.status(200).send(responseUser)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export { registerCtrl, loginCtrl }
