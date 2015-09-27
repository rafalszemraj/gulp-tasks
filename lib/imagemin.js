var gulp        = require('gulp'),
    imagemin    = require('gulp-imagemin');

module.exports = function(files,destDir,options) {

    return function() {

        return gulp.src(files)
            .pipe(imagemin(options || {}))
            .pipe(gulp.dest(destDir) );
    }
}