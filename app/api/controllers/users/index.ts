import * as usersCreateController from './users.create'

const users = () => {
  const controller: any = {}

  controller.create = usersCreateController

  return controller
}

export default users
