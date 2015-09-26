var gulp       = require('gulp'),
    clean      = require('gulp-clean');

module.exports = function(files) {

    return function() {

        return gulp.src(files)
            .pipe(clean({read:false}));

    }
}