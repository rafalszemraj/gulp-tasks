var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    browserify      = require('browserify'),
    colors          = gutil.colors;
    watchify        = require('watchify'),
    livereload      = require('gulp-livereload'),
        _           = require('lodash'),
    source          = require('vinyl-source-stream'),
    path            = require('path')


     function handleError(task) {
    return function(err) {
        gutil.log(gutil.colors.red(err));
    }};

    function logElements(title, elements, chalk, chalkTitle, tab) {

        tab = isNaN(tab) ? 1 : tab;
        gutil.log( chalkTitle(title), '->');
        _.forEach(elements,  function(el, key) {

            if( _.isPlainObject(el)) {

                logElements( title + ":" + key, el, chalk, chalkTitle, ++tab );
                return;
            }
            var result = isNaN(key) ? key+" : "+el : el;
            gutil.log(chalk(_.repeat( "   ", tab), result) );
        } );

    };


module.exports = function(options, dest, externals, plugins, watch, production) {

    var bundler,
        rebundle,
        outputDir = path.dirname(dest),
        file = path.basename(dest)

    if(!watch) {

        gutil.log("Production build", production ? colors.green.bold("YES") : colors.red.bold("NO"))
        logElements("entries", options.entries, colors.green, colors.bgGreen);
        externals && logElements("externals", externals, colors.cyan, colors.bgCyan);
        options = _.assign(options, watchify.args);
    }



    bundler = browserify(options)
    plugins && browserify.plugin(plugins);
    externals && browserify.external(externals);

    watch && (bundler = watchify(bundler))

    rebundle = function() {

        var stream = bundler.bundle();
        stream.on('error', handleError('Browserify'));
        stream = stream
            .pipe(source(path.basename(dest)))
            .pipe(gulp.dest(path.dirname(dest)))
        watch && stream.pipe(livereload())
        return stream;
    }

    bundler.on('update', rebundle);
    bundler.on('log', gutil.log );
    return rebundle();

}
