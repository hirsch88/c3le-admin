'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');
var _ = require('lodash');

/**
 * INJECT
 * Injects all bower and application scripts into the main index.html file
 */
gulp.task('inject', ['ts-compile', 'sass'], function () {

  var source = [];
  source.push(path.join(projectConfig.path.srcDir, projectConfig.path.assets.css));

  _.forEach(projectConfig.angular.files, function (item) {
    source.push(item);
  });

  var bowerFiles = projectConfig.bower.files.main().filter(function (filePath) {
    return filePath.indexOf(projectConfig.ignoredBowerFiles) < 0 ;
  });

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.mainTpl))
    .pipe($.inject(gulp.src(bowerFiles, {read: false}), {name: 'bower', relative: true}))
    .pipe($.inject(gulp.src(source), { relative: true }))
    .pipe($.rename(projectConfig.path.main))
    .pipe(gulp.dest(projectConfig.path.srcDir));

});
