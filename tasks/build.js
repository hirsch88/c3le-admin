'use strict';

var gulp = require('gulp');

/**
 * BUILD
 */

gulp.task('build', ['bootlint', 'htmllint', 'inject', 'build-config']);
