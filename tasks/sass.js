'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

/**
 * SASS
 * Generates a new css file from our sass files
 */

gulp.task('sass', ['css-auto-prefix', 'sass-inject']);

gulp.task('sass-compile', function () {

  var mainSassFile = path.join(projectConfig.path.srcDir, projectConfig.path.assets.sassMain);
  var mainCssDir = path.join(projectConfig.path.srcDir, projectConfig.path.assets.cssDir);
  var cssFile = projectConfig.pkg.name + '.css';

  return gulp
    .src(mainSassFile)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: projectConfig.autoprefixer.browsers,
      cascade: false,
      remove: projectConfig.autoprefixer.remove
    }))
    .pipe(sourcemaps.write())
    .pipe($.rename(cssFile))
    .pipe(gulp.dest(mainCssDir))
    .pipe(reload({stream: true}));

});

gulp.task('sass-inject', ['sass-compile'], function () {

  var source = [];
  source.push(path.join(projectConfig.path.srcDir, projectConfig.path.assets.css));

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.main))
    .pipe($.inject(gulp.src(source), {relative: true}))
    .pipe($.rename(projectConfig.path.main))
    .pipe(gulp.dest(projectConfig.path.srcDir));

});
