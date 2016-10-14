/**
 * @license
 * Copyright (c) 2016 The IBM Research Emergent Solutions authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

function lint(filesToLint) {
  return function lint() {
    return gulp.src(filesToLint)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  }
}

module.exports = lint;
