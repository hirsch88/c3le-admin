'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');
var _ = require('lodash');

/**
 * COPY FONTS
 */

gulp.task('fonts', ['fonts-clean'], function () {

  var fontExt = [
    'svg', 'eot', 'ttf', 'woff', 'woff2', 'otf'
  ];

  var bowerFiles = projectConfig.bower.files.main().filter(function (filePath) {
    return filePath.indexOf(projectConfig.ignoredBowerFiles) < 0;
  });

  bowerFiles = bowerFiles.filter(function (item) {
    var a = item.split('.');
    return fontExt.indexOf(a[a.length - 1]) >= 0;
  });

  bowerFiles = bowerFiles.concat(projectConfig.fonts);

  return gulp
    .src(bowerFiles)
    .pipe(gulp.dest(path.join(projectConfig.path.srcDir, projectConfig.path.assets.fontDir)));

});

