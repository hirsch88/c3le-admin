'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({ lazy: true });
var typescript = require('typescript');

var tsProject = $.typescript.createProject(process.cwd() + '/tsconfig.json', {
  typescript: typescript
});

/**
 * TS
 * Lints and compiles all .ts source files in the app.
 */
gulp.task('ts-compile', ['ts-lint'], function() {
  return gulp.src([
    projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts.replace(/\.js$/, '.ts'),
    'typings/**/*.d.ts'
  ], {
    base: '.'
  })
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject))
    .js
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.'));
});
