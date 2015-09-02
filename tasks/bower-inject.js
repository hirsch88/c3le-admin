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
gulp.task('bower-inject', function () {

  var bowerFiles = projectConfig.bower.files.main().filter(function (filePath) {
    return filePath.indexOf(projectConfig.ignoredBowerFiles) < 0 ;
  });

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.main))
    .pipe($.inject(gulp.src(bowerFiles, {read: false}), {name: 'bower', relative: true}))
    .pipe($.rename(projectConfig.path.main))
    .pipe(gulp.dest(projectConfig.path.srcDir));

});
