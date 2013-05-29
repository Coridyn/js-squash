var _ = require('lodash');

module.exports.squash = function(content, options){
	// Allow single or double quotes.
	options = _.defaults({}, {
		escapeSingle: true,
		escapeDouble: true
	}, options);
	
	var c = content
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n');
	
	if (options.escapeSingle){
		// Replace single quotes:
		c = c.replace(/'/g, '\\\'');
	}
	
	if (options.escapeDouble){
		// Replace double quotes:
		c = c.replace(/"/g, '\\"');
	}
		
	return c;
};
