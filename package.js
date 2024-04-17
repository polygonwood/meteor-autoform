/* eslint-env meteor */
Package.describe({
  name: 'aldeed:autoform',
  summary:
    'Easily create forms with automatic insert and update, and automatic reactive validation.',
  git: 'https://github.com/aldeed/meteor-autoform.git',
  version: '8.0.0-rc.1'
})

Npm.depends({
  'mongo-object': '3.0.1',
})

Package.onUse(function (api) {
  api.versionsFrom(['2.8.0', '3.0-beta.0'])

  // Dependencies
  api.use([
      'livedata',
      'deps',
      'templating@1.4.3',
      'ejson',
      'blaze',
      'reactive-var',
      'reactive-dict',
      'random',
      'ecmascript',
      'mongo'
    ])

  api.use('jquery@1.11.10 || 3.0.0', 'client')

  api.use(
    [
      'momentjs:moment@2.30.1',
      'mrt:moment-timezone@0.2.1',
      'aldeed:collection2@4.0.0',
      'aldeed:simple-schema@2.0.0-beta300.0',
      'aldeed:collection2@3.0.0 || 4.0.0',
      'aldeed:moment-timezone@0.4.0',
      'reload'
    ],
    'client',
    { weak: true }
  )

  // Exports
  api.export('AutoForm', 'client')

  // adding the core files in order to keep it backwards-compatible with
  // extensions and themes
  api.addFiles([
    './utility.js',
    './form-preserve.js',
    './autoform-hooks.js',
    './autoform-formdata.js',
    './autoform-arrays.js',
    './autoform.js',
    './autoform-validation.js',
    './autoform-inputs.js',
    './autoform-api.js'
  ], 'client')

  // api.mainModule('main.js', 'client')
})

Package.onTest(function (api) {
  // Running the tests requires a dummy project in order to
  // resolve npm dependencies and the test env dependencies.
  api.use([
    'ecmascript',
    'random',
    'tracker',
    'blaze',
    'templating@1.4.3',
    'mongo',
    'meteortesting:mocha',
    'meteortesting:browser-tests',
    'momentjs:moment@2.30.1'
  ])
  api.use([
    'aldeed:autoform@8.0.0-rc.1',
    'aldeed:moment-timezone',
    'aldeed:simple-schema@2.0.0-beta300.0'
  ], 'client')

  api.addFiles('tests/testSuite.tests.js', 'client');
})
