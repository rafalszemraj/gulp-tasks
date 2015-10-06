module.exports = {

    report          : require('./lib/report'),
    clean           : require('./lib/clean'),
    build           : require('./lib/build'),
    test            : require('./lib/test'),
    serial          : require('./lib/multi').serial,
    parallel        : require('./lib/multi').parallel,
    uglify          : require('./lib/uglify'),
    minify          : require('./lib/minify'),
    less            : require('./lib/less'),
    imagemin        : require('./lib/imagemin')

}