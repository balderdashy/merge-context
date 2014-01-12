var _  = require('lodash');


//
// TODO: release as separate module
//


// Expose both functions
module.exports = extendContext;
module.exports.all = extendContextAll;




/**
 * 
 * @param  {[type]} objOfFns [description]
 * @param  {[type]} newCtx            [description]
 * @return {[type]}                   [description]
 */
function extendContextAll (objOfFns, newCtx) {
	return _.mapValues(objOfFns, function (fn) {
		if (!_.isFunction(fn)) return fn;
		return extendContext(fn, newCtx);
	});
}

/**
 * @param  {Function} fn
 * @param  {Object}   newCtx
 * 
 * @return {Function} bound
 */
function extendContext (fn, newCtx) {
	return function bound () {
		newCtx = _.merge(newCtx, this);
		var args = Array.prototype.slice.call(arguments);
		fn.apply(_.extend(this, newCtx), args);
	};
}
