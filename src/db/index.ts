import mysql from 'mysql2/promise'
import { drizzle } from 'drizzle-orm/mysql2'
import { env } from '@/config/env'

if (process.env.NODE_ENV === 'test') {
  console.warn('⚠️ Running in TEST mode')
}

const pool = mysql.createPool(env.DB_URL)

export const db = drizzle(pool)