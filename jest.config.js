module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/tests/**'],
  coverageDirectory: 'docs/',
  coverageReporters: ['json', 'text', 'html'],
}
