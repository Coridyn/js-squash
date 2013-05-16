var fs = require('fs');

function squash(content){
	return content.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/'/g, '\\\'');
};

var files = process.argv.slice(2);
files.forEach(function(file){
	var content = fs.readFileSync(file, {encoding: 'utf8'});
	console.log(squash(content));
});