var gulp       = require('gulp'),
    del        = require('del');

module.exports = function() {

    var files = Array.prototype.slice.apply( null, arguments);
    return function() {

        return del(files)

    }
}