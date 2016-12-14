/**
 * @license
 * Copyright (c) 2016 The IBM Research Emergent Solutions authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-polymer-init-ibm-application:app', function() {
  before(function() {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        applicationId: 'ibm-application',
        applicationName: 'Application',
        applicationDescription: 'Application description'
      })
      .toPromise();
  });

  it('creates files', function() {
    assert.file([
      'gulp-tasks/clean.js',
      'gulp-tasks/images.js',
      'gulp-tasks/lint.js',
      'gulp-tasks/project.js',
      'images/manifest/icon-144x144.png',
      'images/manifest/icon-192x192.png',
      'images/manifest/icon-48x48.png',
      'images/manifest/icon-512x512.png',
      'images/manifest/icon-72x72.png',
      'images/manifest/icon-96x96.png',
      'images/favicon.ico',
      'src/page-404/page-404.html',
      'src/page-home/page-home.html',
      'src/app-icons.html',
      'src/app-shell.html',
      'src/app-styles.html',
      'test/.eslintrc.json',
      'test/index.html',
      '.eslintrc.json',
      '.gitignore',
      'bower.json',
      'gulpfile.js',
      'index.html',
      'LICENSE',
      'manifest.json',
      'package.json',
      'polymer.json',
      'README.md',
      'service-worker.js'
    ]);
  });
});
