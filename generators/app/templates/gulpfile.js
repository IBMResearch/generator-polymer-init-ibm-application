/**
 * @license
 * Copyright (c) 2016 The IBM Research Emergent Solutions authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');

// Keep the global.config above any of the gulp-tasks that depend on it
global.config = {
  polymerJsonPath: path.join(process.cwd(), 'polymer.json'),
  build: {
    rootDirectory: 'build',
    bundledDirectory: 'bundled',
    unbundledDirectory: 'unbundled',
    // Accepts either 'bundled', 'unbundled', or 'both'
    bundleType: 'bundled'
  },
  serviceWorkerPath: 'service-worker.js',
  swPrecacheConfig: {
    staticFileGlobs: [
      '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
      '/images/**/*',
      '/index.html',
      '/manifest.json'
    ],
    navigateFallback: '/index.html'
  }
};

const clean = require('./gulp-tasks/clean.js');
const images = require('./gulp-tasks/images.js');
const lint = require('./gulp-tasks/lint.js');
const project = require('./gulp-tasks/project.js');

function source() {
  return project.splitSource()
    .pipe(gulpif('**/*.{png,gif,jpg,svg}', images.minify()))
    .pipe(project.rejoin());
}

function dependencies() {
  return project.splitDependencies()
    .pipe(project.rejoin());
}

// Clean the build directory, split all source and dependency files into streams
// and process them, and output bundled and/or unbundled versions of the project
// with their own service workers
gulp.task('build', gulp.series([
  clean([global.config.build.rootDirectory]),
  project.merge(source, dependencies),
  project.serviceWorker
]));

// Lint JavaScript code
gulp.task('lint', lint([
  'gulp-tasks/**/*.js',
  'src/**/*.{js,html}',
  'test/**/*.{js,html}',
  'gulpfile.js',
  'index.html',
  'service-worker.js'
]));
