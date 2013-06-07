var jscrape = require('jscrape');

var wikiPageURL = 'http://en.wikipedia.org/wiki/' + process.argv[2];

jscrape ( wikiPageURL, function ( error, $, response, body ) {
	if ( !error && $ ) {
		var bodyContent = $('#bodyContent').text();
		var paras = $('#bodyContent p').each(function(index){
			var para = $(this).text();
			var sentances = para.split('.');
			sentances.forEach(function(sentance){
				if (sentance.length) {
					console.log(sentance.trim() + ".");
				}
			});
		});
	} else {
		console.log("failed to get url");
	}
})