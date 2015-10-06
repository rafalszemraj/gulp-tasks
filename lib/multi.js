var    _               = require('lodash');

function parallel() {

    var org_fns = Array.prototype.concat.apply([], arguments),
        fns = org_fns.concat();
    if(!fns.length) return;
    var toComplete = fns.length;
    return function(done) {

        _.forEach( fns, function(fn) {

            fn().on('end', function() {

                toComplete--;
                if(!toComplete)  {

                    fns = org_fns.concat();
                    typeof done === 'function' && done();
                }
            })
        })
    }
}

function serial() {

    var org_fns = Array.prototype.concat.apply([], arguments),
        fns = org_fns.concat();
    if(!fns.length) return;
    return function(done) {

        var processCurrent = function(f) {

            f().on('end', function() {

                if( fns.length ) processCurrent(fns.shift())
                else {

                    fns = org_fns.concat();
                    typeof done === 'function' && done();
                }
            });
        }
        processCurrent(fns.shift());
    }
}

module.exports = {parallel:parallel, serial:serial}