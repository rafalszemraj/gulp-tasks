var gulp       = require('gulp'),
    del        = require('del');

module.exports = function() {

    var files = Array.prototype.slice.apply(arguments);
    return function() {

        return del(files)

    }
}