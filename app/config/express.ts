import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import * as swaggerFile from '../swagger-output.json'

// Routes
import status from '@routes/status.routes'

export default (): Express => {
  const app = express()

  app.set('port', process.env.PORT || 3000)
  app.use(express.static('public'))
  app.use(bodyParser.json())
  app.use(cors())
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  // Initialize routes
  status(app)

  return app
}
