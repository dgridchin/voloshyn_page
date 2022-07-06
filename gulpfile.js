'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

/*
 Styles
 */
gulp.task('sass', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:dev', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch([
        './src/styles/**/*.scss'
    ], ['sass']);
});

/*
Js
 */
gulp.task('scripts:build', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});


/*
 Default Build task
 */

gulp.task(
    'default', [
        'sass',
        'html:build',
        'scripts:build'
    ]
);
