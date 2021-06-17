
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ],
  coverageThreshold: {
    global: {
      branches: 69,
      functions: 73,
      lines: 80
    }
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [],
}
