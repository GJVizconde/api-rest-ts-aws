import { Router } from 'express'
import multerMiddleware from '../middleware/file.middleware'
import { getFile } from '../controllers/storage.controller'
import { checkSession } from '../middleware/session.middleware'

const router = Router()

router.get('/', checkSession, multerMiddleware.single('myfile'), getFile)

export { router }
