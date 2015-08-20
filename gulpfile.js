'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('transpile', function () {
  return gulp.src('src/vigur.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
  return gulp.src('src/vigur.js')
    .pipe(babel())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(rename('vigur.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  return gulp.src('test/vigur.js')
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('default', ['test', 'transpile', 'minify']);
