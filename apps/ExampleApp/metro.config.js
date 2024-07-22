const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const rootDirectory = path.resolve(__dirname, '../..');

const config = {
  resolver: {
    unstable_enableSymlinks: true,
  },
  watchFolders: [
    rootDirectory,
    path.resolve(rootDirectory, 'node_modules'),
    path.resolve(rootDirectory, 'packages', 'component-module'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
