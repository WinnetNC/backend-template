import type { Request, Response } from 'express'

export const getExample = (_req: Request, res: Response) => {
  res.json({ message: 'Hello from example module' })
}