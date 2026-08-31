const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest/presets/default-esm',

  rootDir: './',

  moduleFileExtensions: ['js', 'json', 'ts'],

  extensionsToTreatAsEsm: ['.ts'],

  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
      useESM: true,
    }),

    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  testRegex: '.*\\.spec\\.ts$',

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          ...compilerOptions,
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
        },
      },
    ],
  },
}
