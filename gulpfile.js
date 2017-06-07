'use strict';

var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    gulpWebserver = require('gulp-webserver'),
    runSequence = require('run-sequence'),
    gulpPug = require('gulp-pug'),
    gulpWatch = require('gulp-watch');

var sassPath = './sass',
    sassDest = './css/',
    pugPath = './views',
    pugDest = './html';


gulp.task('webserver', function() {
    return gulp.src('.')
        .pipe(gulpWebserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('watch', function() {
	return runSequence(['watch:sass', 'watch:pug']);
});

gulp.task('watch:sass', function() {
    return gulpWatch(sassPath + '/**/*.scss', function() {
        runSequence(['compile:sass']);
    });
});

gulp.task('watch:pug', function() {
    return gulpWatch(pugPath + '/**/*.pug', function() {
        runSequence(['compile:pug']);
    });
});

gulp.task('compile', function() {
	return runSequence(['compile:sass', 'compile:pug']);
});

gulp.task('compile:sass', function() {
    return gulp.src(sassPath + '/main.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest(sassDest));
});

gulp.task('compile:pug', function() {
    return gulp.src(pugPath + '/**/*.pug')
        .pipe(gulpPug({}))
        .pipe(gulp.dest(pugDest));
});

gulp.task('default', function() {
    runSequence(['compile:sass', 'webserver', 'watch:sass']);
});

gulp.task('run:pug', function() {
    runSequence(['compile', 'webserver', 'watch']);
});