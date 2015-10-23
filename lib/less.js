var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    less        = require('gulp-less');

module.exports = function(files,destDir,options) {


    return function() {

        var l = less(options || {});
        l.on( 'error', function(error) {

            gutil.log(error);
            l.end();

        } )
        return gulp.src(files)
            .pipe(l)
            .pipe(gulp.dest(destDir) );
    }
}