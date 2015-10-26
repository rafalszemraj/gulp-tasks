var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    rename      = require('gulp-rename'),
    less        = require('gulp-less');

module.exports = function(files,dest,options) {

var outputDir = path.dirname(dest),
        file = path.basename(dest);
    return function() {

        var l = less(options || {});
        l.on( 'error', function(error) {

            gutil.log(error);
            l.end();

        } )
        return gulp.src(files)
            .pipe(l)
            .pipe(rename(file))
            .pipe(gulp.dest(outputDir) );
    }
}
