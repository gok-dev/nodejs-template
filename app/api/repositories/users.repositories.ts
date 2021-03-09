import { connect, disconnect } from '@database/mongodb'

export const saveUser = async <T>(data: T): Promise<void> => {
  connect(async (err: any, db: any) => {
    const collection = db.collection('users')

    try {
      await collection.insertOne(data)
    } catch (err) {
      console.log('ERROR INSERT USER: ', err)
    } finally {
      disconnect()
    }
  })
}
