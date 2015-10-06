var gulp        = require('gulp'),
    mocha       = require('gulp-mocha');

module.exports = function(reporter, testsBuild) {

    reporter = reporter || 'spec';
    testsBuild = testsBuild || 'test/tests.build.js';
    return gulp.src(testsBuild, {read:false})
        .pipe(mocha({
            reporter: reporter
        }))

}
