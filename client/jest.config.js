module.exports = {
    preset: '@babel/preset-env',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };
  