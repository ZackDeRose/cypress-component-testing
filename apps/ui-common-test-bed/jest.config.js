module.exports = {
  name: 'ui-common-test-bed',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui-common-test-bed/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
