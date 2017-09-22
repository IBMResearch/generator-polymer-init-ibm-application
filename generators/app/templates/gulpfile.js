/**
 * @license
 * Copyright (c) 2017 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

/* eslint-env es6, node */

'use strict';

const gulp = require('gulp');
const replace = require('gulp-replace');

const buildDirectory = 'build/';

const settings = {
  apiUrl: {
    development: '',
    production: ''
  }
};

function production() {
  return gulp.src(`${buildDirectory}**`)
    .pipe(replace(
      settings.apiUrl.development,
      settings.apiUrl.production,
      { skipBinary: true }
    ))
    .pipe(gulp.dest(buildDirectory));
}

gulp.task('production', production);
