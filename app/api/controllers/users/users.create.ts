import { Request, Response } from 'express'
import * as userServices from '@services/users.services'

export const createUser = async (req: Request, res: Response) => {
  const response = await userServices.saveUser(req.body)

  return res.status(response.code).json({ ...response })
}
