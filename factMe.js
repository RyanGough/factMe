var jscrape = require('jscrape');

jscrape ( 'http://en.wikipedia.org/wiki/London', function ( error, $, response, body ) {
	if ( !error && $ ) {
		var bodyContent = $('#bodyContent');
		console.log(bodyContent.text());
	} else {
		console.log("failed to get url");
	}
})