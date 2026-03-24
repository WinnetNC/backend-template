import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'
import { errorResponse } from '@/utils/apiResponse'

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    })

    if (!result.success) {
      return res.status(400).json(
        errorResponse('Validation failed', result.error.flatten())
      )
    }

    next()
  }