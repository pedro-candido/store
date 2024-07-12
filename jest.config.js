module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx', 'svg'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  collectCoverage: true,
  setupFiles: [
    './node_modules/react-native/jest/setup',
    './node_modules/react-native-gesture-handler/jestSetup',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './test-setup.ts'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!App.tsx',
    '!.storybook/**/*',
  ],
};
