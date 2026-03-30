import { AuthUser } from '@/services/auth/auth.service'

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser
    }
  }
}