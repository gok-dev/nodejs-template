import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: 'API Online!',
  })
}
