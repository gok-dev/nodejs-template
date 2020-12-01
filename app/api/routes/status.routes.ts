import { Express } from 'express'
import statusController from '@controllers/status'

const status = (app: Express) => {
  const controller = statusController()

  app.route('/v1/status/').get(controller.api)
}

export default status
