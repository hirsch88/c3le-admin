'use strict';

var gulp = require('gulp');

/**
 * BUILD
 */

gulp.task('build', ['build-config', 'fonts', 'sass', 'ts']);

