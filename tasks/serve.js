'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = require('path');

/**
 * SERVE
 * Creates a webserver and adds some watchers to automatically refresh your browser
 */
gulp.task('serve', ['build'], function () {
  browserSync({
    server: {
      baseDir: projectConfig.path.srcDir,
      index: projectConfig.path.main
    },
    open: false,
    reloadDebounce: 300
  });

  // Bower
  //gulp.watch('./bower.json', ['bower-inject', 'fonts', reload]);

  // i18n
  //gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.assets.i18nDir, '*.json'), [reload]);

  // SASS
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.assets.sass), ['sass']);

  // TypeScript
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.scripts.replace(/\.js$/, '.ts')), ['ts', reload]);

  // Templates
  //gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.templates), ['inject', reload]);

});

gulp.task('serve-light', function () {
  browserSync({
    server: {
      baseDir: projectConfig.path.srcDir,
      index: projectConfig.path.main
    },
    open: false,
    reloadDebounce: 300
  });

  // SASS
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.assets.sass), ['sass']);
  gulp.watch('./bower.json', ['bower-inject', 'fonts']);

});

gulp.task('serve-dist', function () {
  browserSync({
    server: {
      baseDir: projectConfig.path.distDir,
      index: projectConfig.path.main,
      browser: 'Google Chrome',
      open: true
    }
  });
});
