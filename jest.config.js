module.exports = {
  collectCoverageFrom: ['lib/**/*.{js,jsx,ts,tsx}', '!lib/**/*.d.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/__tests__/*.ts',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/dictionaries/'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
};
