import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/AppError'
import { errorResponse } from '@/utils/apiResponse'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(errorResponse(err.message))
  }

  console.error(err)

  return res
    .status(500)
    .json(errorResponse('Internal Server Error'))
}