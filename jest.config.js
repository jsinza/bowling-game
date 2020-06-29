module.exports = {
  coverageDirectory: "../coverage",
  displayName: "ng unit-tests",
  rootDir: "src",
  silent: false,
  testResultsProcessor: "jest-sonar-reporter",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
