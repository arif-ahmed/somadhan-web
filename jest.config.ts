import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@features/(.*)$': '<rootDir>/features/$1',
    '^@types/(.*)$': '<rootDir>/types/$1',
  },
}

export default createJestConfig(customJestConfig)
