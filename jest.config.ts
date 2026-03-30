export default {
  preset: 'ts-jest',
  testEnvironment: 'node',

  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  testMatch: [
    '**/src/**/*.test.ts',
    '**/tests/**/*.test.ts'
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    ' src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/**/types.ts'
  ],

  coverageDirectory: 'coverage',

  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}