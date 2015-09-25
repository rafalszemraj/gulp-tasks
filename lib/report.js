var gulp        = require('gulp'),
    report      = require('gulp-sizereport');

module.exports = function(files) {

    return function() {

        return gulp.src(files)
            .pipe(report({gzip:true}));

    }
}