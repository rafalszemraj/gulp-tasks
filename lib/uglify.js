var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    path        = require('path'),
    gutil       = require('gulp-util'),
    colors      = gutil.colors;

module.exports = function(file,options,destDir) {

    return function() {

        gutil.log("uglifying ", file)
        return gulp.src(file)
            .pipe(uglify(options || {}))
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest(destDir || path.dirname(file)))
            .on('end', function() { gutil.log("done ", file)});

    }
}