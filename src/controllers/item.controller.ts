import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { deleteCar, getCar, getCars, insertCar, updateCar } from '../services/item.service'

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getCar(id)
    const data = response ? response : 'NOT_FOUND'
    res.status(200).send(data)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.status(200).send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
  const { id } = params
  try {
    const response = await updateCar(id, body)
    res.status(200).send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  console.log('Estoy en postItem')
  try {
    const responseItem = await insertCar(body)
    res.status(200).send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e)
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const responseItem = await deleteCar(id)
    res.status(200).send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
