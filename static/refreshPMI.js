/*

wget http://projects.eclipse.org/json/projects/all -O all.json
wget http://projects.eclipse.org/json/technology/internet%20of%20things -O projects.json 

*/


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

        console.log('var download_stats = ' + JSON.stringify(stats, null, 2) + ';');

        fs.writeFile('downloadStats.json', stats, function(err) {
            if (err) {
                return console.log(err);
            }

          //  console.log("The file was saved!");
        });

    });
});

var all = require('./all.json');

var releases = {}
var download_urls = {}
var project_states = {}

for (var project in all.projects) {
	if(project.startsWith('iot.')) {
	//	console.log(project);
        for(var repo in all.projects[project].github_repos)
        {
       //     console.log(all.projects[project].id[0].value.replace('iot.', '') + ':' + all.projects[project].github_repos[repo].url.replace('https://github.com/eclipse/',''))
        }
		if(all.projects[project].releases) {
			for(var release in all.projects[project].releases)
			{
				if(all.projects[project].releases[release].review && all.projects[project].releases[release].review.state[0].value == 'success') {
				//	console.log("Latest Release: " + all.projects[project].releases[release].title);
					releases[project] = all.projects[project].releases[release].title;
					break;
				}
			}

//console.log(all.projects[project])

            for(var release in all.projects[project].releases)
            {
                if(all.projects[project].releases[release].review && all.projects[project].releases[release].review.state[0].value == 'success') {
                  console.log(
                                all.projects[project].releases[release].date[0].value,
                                all.projects[project].releases[release].parent_project[0].id,
                                all.projects[project].releases[release].title
                    );
                }
            }


		} 

        var url = url = 'http://projects.eclipse.org/projects/' + project;
        if(all.projects[project].download_url.length > 0) {
            url = all.projects[project].download_url[0].url;
        }  else if (all.projects[project].downloads_message.length > 0){
            // link to download page
            url = 'http://projects.eclipse.org/projects/' + project + '/downloads';
        } else if (all.projects[project].website_url.length > 0) {
            url = all.projects[project].website_url[0].url ;
        }
        download_urls[project] = url ;
        project_states[project] =  all.projects[project].state[0].value;
	}
}
console.log('var releases = ' + JSON.stringify(releases, null, 2) + ';');
console.log('var download_urls = ' + JSON.stringify(download_urls, null, 2) + ';');
console.log('var project_states = ' + JSON.stringify(project_states, null, 2) + ';');
