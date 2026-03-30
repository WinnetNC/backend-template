export type AuthUser = {
  id: string
  email?: string
  roles?: string[]
}

export const verifyAuthToken = async (token: string): Promise<AuthUser> => {
  if (!token) {
    throw new Error('No token provided')
  }

  // 🔥 Template placeholder
  throw new Error('verifyAuthToken not implemented')
}