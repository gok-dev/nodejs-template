import { Response } from 'express'

export default (res: Response) => {
  return res.status(200).json({
    status: 200,
    message: 'API Online!',
  })
}
