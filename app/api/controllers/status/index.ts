import api from './api'

const status = () => {
  const controller: any = {}

  controller.api = api

  return controller
}

export default status
