import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

module.exports = {
  development: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'app', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'app', 'database', 'seeds'),
    },
  },

  staging: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'app', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'app', 'database', 'seeds'),
    },
  },

  production: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'app', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'app', 'database', 'seeds'),
    },
  },
}
