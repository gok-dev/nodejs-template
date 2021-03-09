import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`

let connection = null
let db = null

export const connect = (callback) => {
  if (connection) return callback(null, db)

  MongoClient.connect(uri, (err, conn) => {
    if (err) return callback(err, null)

    connection = conn
    db = conn.db(process.env.MONGODB_DATABASE)

    return callback(null, db)
  })
}

export const disconnect = () => {
  if (!connection) return true

  connection.close()
  connection = null

  return true
}
