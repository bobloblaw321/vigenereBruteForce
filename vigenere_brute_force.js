const chef = require("cyberchef");
const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
	input: fs.createReadStream("/path/to/key/list/file"), //keep in mind vigenere cipher keys can only contain letters
	console: false
});

var done = false;

// Reads each line of the key file as a stream to enable large files for brute forcing (i.e. rockyou)
readInterface.on('line', function(line) {
	if (String(chef.vigenèreDecode('BZQ', [line])) == 'MII') {
        	console.log('The key is: ' + line)
        	throw new Error("Key found :)");
	}
});
