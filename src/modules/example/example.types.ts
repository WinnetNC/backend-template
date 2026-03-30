import { z } from 'zod'
import { createExampleSchema, updateExampleSchema } from './example.schema'

export type CreateExampleInput = z.infer<typeof createExampleSchema>
export type UpdateExampleInput = z.infer<typeof updateExampleSchema>