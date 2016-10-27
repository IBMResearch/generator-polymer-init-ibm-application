/**
 * @license
 * Copyright (c) 2016 The IBM Research Emergent Solutions authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

var path = require('path');

var eslint = require('gulp-eslint');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');

gulp.task('lint', function() {
  return gulp.src('**/*.{html,js}')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function(cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('test', function(cb) {
  let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function(err) {
      mochaErr = err;
    })
    .on('end', function() {
      cb(mochaErr);
    });
});

gulp.task('prepublish', gulp.series([
  'nsp'
]));
