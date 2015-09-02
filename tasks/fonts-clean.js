'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var del = require('del');
var path = require('path');

/**
 * CLEAN
 */
gulp.task('fonts-clean', function (cb) {
  del([
    path.join(projectConfig.path.srcDir, projectConfig.path.assets.fontDir)
  ], cb);
});
