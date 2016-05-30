var httpreq = require('httpreq');
var parse = require('csv-parse');
var fs = require('fs');

httpreq.get('https://docs.google.com/spreadsheets/d/1MT8vUectDG7qnt83LBts-B7oECMsICXyB4Tn4Kxl64U/pub?gid=2096262216&single=true&output=csv', function(err, res) {
    if (err) return console.log(err);

    //    console.log(res.body);

    var input = res.body;
    var stats = {}


    parse(input, {
        'delimiter': ','
    }, function(err, output) {
        //		console.log(output);

        var d;
        for (var i = output.length - 1; i >= 0; i--) {
            var row = output[i];
            if (d && row[1] != d) break;
            d = row[1];
            stats['iot.' + row[0]] = (stats['iot.' + row[0]] | 0) + parseInt(row[2]);
        }
        console.log(stats);

        fs.writeFile('downloadStats.json', stats, function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });

    });
});

var all = require('./all.json');

var releases = {}

for (var project in all.projects) {
	if(project.startsWith('iot')) {
	//	console.log(project);
		if(all.projects[project].releases) {
			for(var release in all.projects[project].releases)
			{
				if(all.projects[project].releases[release].review && all.projects[project].releases[release].review.state[0].value == 'success') {
				//	console.log("Latest Release: " + all.projects[project].releases[release].title);
					releases[project] = all.projects[project].releases[release].title;
					break;
				}
			}
		} else {
//			console.log("Latest Release: none");
		}
//		console.log('-----------');
	}
}
console.log(releases);
