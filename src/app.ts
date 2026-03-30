import express from 'express'
import exampleRoutes from '@/modules/example/example.routes'
import { errorHandler } from '@/middleware/error.middleware'

const app = express()

app.use(express.json())

app.use('/api/example', exampleRoutes)



app.use(errorHandler)

export default app