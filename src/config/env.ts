import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

dotenv.config()

function requireEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export const env = {
  PORT: Number(process.env.PORT) || 3000,

  DB_HOST: requireEnv(process.env.DB_HOST, 'DB_HOST'),
  DB_USER: requireEnv(process.env.DB_USER, 'DB_USER'),
  DB_PASSWORD: requireEnv(process.env.DB_PASSWORD, 'DB_PASSWORD'),
  DB_NAME: requireEnv(process.env.DB_NAME, 'DB_NAME'),

  DB_URL: requireEnv(process.env.DB_URL, 'DB_URL'),
}