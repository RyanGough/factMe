var request = require('request');
var cheerio = require('cheerio');

var answer = process.argv[2];
var wikiPageUrl = 'http://en.wikipedia.org/wiki/' + answer;

request(wikiPageUrl, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		$ = cheerio.load(body);
		var articleText = $('#bodyContent p').each(function(){
			var para = $(this).text();
			var sentances = para.split('.');
			sentances.forEach(function(sentance){
				sentance = sentance.trim();
				if (sentance.length) {
					var fact = new RegExp("^" + answer);
					if (fact.test(sentance)) {
						var footnote = new RegExp("\[[0-9]*\]");
						sentance = sentance.replace(footnote, "", 'g');
						console.log(sentance.trim() + ".");
					}
				}
			});
		});
	} else {
		console.log("failed to load page");
	}
});