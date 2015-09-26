var gulp        = require('gulp'),
    minifyCSS   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    path        = require('path');

module.exports = function(file,destDir) {

    return function() {

        return gulp.src(file)
            .pipe(minifyCSS())
            .pipe(rename({extname: '.min.css'}))
            .pipe(gulp.dest(destDir || path.dirname(file)));
    }
}