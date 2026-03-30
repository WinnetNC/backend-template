export type AuthUser = {
  id: string
  email?: string
  roles?: string[]
}

export const verifyAuthToken = async (token: string): Promise<AuthUser> => {
  if (!token) {
    throw new Error('No token provided')
  }

  // minimal placeholder
  return { id: 'demo-user' }
}