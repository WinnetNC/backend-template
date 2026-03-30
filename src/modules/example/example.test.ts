/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { getExample } from './example.controller' 
// jest.mock('@/db') 

describe('Example Controller', () => {
  it('should return success response', async () => {
    const json = jest.fn()
    const res = { json } as any
    const next = jest.fn()

    await getExample({} as any, res, next)

    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: 'Hello from example module',
      })
    )
    expect(next).not.toHaveBeenCalled()
  })
})