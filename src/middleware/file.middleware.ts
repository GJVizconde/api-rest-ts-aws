import multer, { diskStorage } from 'multer'
import { Request } from 'express'

//storage debe ser creada manualmente primero en la raiz del proyecto
const PATH_STORAGE = `${process.cwd()}/storage`

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE)
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split('.').pop()
    const fileNameRandom = `image-${Date.now()}.${ext}`
    cb(null, fileNameRandom)
  }
})

const multerMiddleware = multer({ storage })

export default multerMiddleware
