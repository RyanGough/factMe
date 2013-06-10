var request = require('request');
var cheerio = require('cheerio');

var wikiPageUrl = 'http://en.wikipedia.org/wiki/' + process.argv[2];

request(wikiPageUrl, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		$ = cheerio.load(body);
		var articleText = $('#bodyContent p').each(function(){
			var para = $(this).text();
			var sentances = para.split('.');
			sentances.forEach(function(sentance){
				if (sentance.length) {
					console.log(sentance.trim() + ".");
				}
			});
		});
	} else {
		console.log("failed to load page");
	}
});