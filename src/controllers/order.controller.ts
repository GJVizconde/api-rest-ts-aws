import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { RequestExt } from '../interfaces/req-ext.interface'

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'ESTO SOLO LO VE LAS PERSONAS CON SESION / JWT',
      user: req?.user?.id
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ORDERS')
  }
}

export { getItems }
