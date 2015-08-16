'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');


gulp.task('transpile', function () {
  return gulp.src('src/vigur.js')
    .pipe(babel())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  return gulp.src('test/vigur.js')
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('default', ['test', 'transpile']);
