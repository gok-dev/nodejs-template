import * as userRepository from '@repositories/users.repositories'
import { StatusProps } from '@utils/apiReturn'

export const saveUser = async <T>(data: T): Promise<StatusProps> => {
  try {
    await userRepository.saveUser(data)

    return {
      code: 200,
      status: true,
      message: 'Usúario salvo com sucesso!',
    }
  } catch (err) {
    console.log(err)

    return {
      code: err?.code || 500,
      status: false,
      message: err?.message || 'Internal server error',
    }
  }
}
