// module.exports = {
//   roots: ['<rootDir>/src'],
//   transform: {
//     '^.+\\.tsx$': 'ts-jest',
//     '^.+\\.ts$': 'ts-jest',
//   },
//   testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   collectCoverage: true,
//   collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
//   coverageDirectory: '<rootDir>/coverage/',
//   coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$', '(.*).d.ts$'],
//   moduleNameMapper: {
//     '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
//   },
//   verbose: true,
//   testTimeout: 30000,
// };

module.exports = {
  // The root of the source code, `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src/'],

  // The test environment that will be used for testing, jsdom for browser environment
  testEnvironment: 'jsdom',

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Ignore cypress e2e test files
  testPathIgnorePatterns: ['<rootDir>/cypress/'],

  // Code coverage config
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],

  // Return proxies object for CSS modules via identity-obj-proxy
  moduleNameMapper: {
    '@/([^\\.]*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
  verbose: true,
  testTimeout: 30000,
};
