var Promise         = require('es6-promise').Promise;
    _               = require('lodash')

function parallel() {

    var fns = Array.prototype.concat.apply([], arguments);
    if(!fns.length) return;
    var toComplete = fns.length;
    return function(done) {

        _.forEach( fns, function(fn) {

            fn().on('end', function() {

                toComplete--;
                if(!toComplete) done();
            })
        })
    }
}

function serial() {

    var fns = Array.prototype.concat.apply([], arguments);
    if(!fns.length) return;
    return function(done) {

        var processCurrent = function(f) {

            f().on('end', function() {

                if( fns.length ) processCurrent(fns.shift())
                else done();
            });
        }
        processCurrent(fns.shift());
    }
}

module.exports = {parallel:parallel, serial:serial}