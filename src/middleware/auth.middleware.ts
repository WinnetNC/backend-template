import { Request, Response, NextFunction } from 'express'
import { verifyAuthToken } from '@/services/auth/auth.service'
import { AppError } from '@/utils/AppError'

export const authMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith ('Bearer ')) {
    return next(new AppError('Unauthorized', 401))
  }

  const token = authHeader.split(' ')[1]

  try {
    const user = await verifyAuthToken(token)
    req.user = user
    next()
  } catch {
    next(new AppError('Invalid token', 401))
  }
}