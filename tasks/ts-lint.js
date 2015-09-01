'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 * TSLINT
 * Lints all .ts source files in the app.
 */
gulp.task('ts-lint', function () {
  return gulp.src([
    projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts.replace(/\.js$/, '.ts')
  ])
    .pipe($.tslint())
    .pipe($.tslint.report('verbose'));
});
