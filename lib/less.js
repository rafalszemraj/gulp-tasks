var gulp        = require('gulp'),
    less        = require('gulp-less');

module.exports = function(files,destDir,options) {

    return function() {

        return gulp.src(files)
            .pipe(less(options || {}))
            .pipe(gulp.dest(destDir) );
    }
}