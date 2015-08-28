'use strict';

var gulp = require('gulp');

/**
 * BUILD
 */

gulp.task('build', ['jshint', 'bootlint', 'htmllint', 'inject', 'build-config']);
