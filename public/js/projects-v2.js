/*!
 * community.js by Christopher Guindon - @chrisguindon
 * Copyright 2013 Eclipse Foundation
 * http://www.eclipse.org/org/documents/epl-v10.php
 */


var projectsAssociation = {
    'Standards': {
        'iot.paho': true,
        'iot.paho.incubator': true,
        'iot.californium': true,
        'iot.om2m': true,
        'iot.mosquitto': true,
        'iot.moquette': true,
        'iot.wakaama': true,
        'iot.leshan': true,
        'iot.concierge': true,
        'iot.risev2g': true,
        'iot.4diac': true,
        'iot.tiaki': true,
        'iot.tinydtls': true,
        'iot.milo': true
    },

    'Frameworks': {
        'iot.hono': true,
        'iot.om2m': true,
        'iot.krikkit': true,
        'iot.kura': true,
        'iot.mihini': true,
        'iot.ponte': true,
        'iot.smarthome': true,
        'iot.eclipsescada': true,
        'iot.4diac': true,
        'iot.whiskers': true
    }

    // rest is 'others' (Ignite, ...)
};


var projectAliases = {
    'iot.californium': 'Californium',
    'iot.4diac': '4DIAC'
};

var downloadStats = {
    'iot.californium': 2624,
    'iot.eclipsescada': 1091,
    'iot.kura': 1035,
    'iot.leshan': 1294,
    'iot.mosquitto': 11039,
    'iot.om2m': 138,
    'iot.paho': 20276,
    'iot.ponte': 407,
    'iot.smarthome': 4034
};

var releases = {
    'iot.paho': '1.1.0',
    'iot.eclipsescada': '0.3.0',
    'iot.concierge': '5.0',
    'iot.mosquitto': '1.4',
    'iot.smarthome': '0.7.0',
    'iot.kura': '2.0.0',
    'iot.om2m': '0.8.0',
    'iot.californium': '1.0.0'
};


(function($, window, document) {
    $(function() {

        // $(window).resize(function() {
        //     resize();
        // });

        // $(document).on('click', '.itembox, .news-list li', function() {
        //     var link = $(this).find('.readmore').attr('href');
        //     $(location).attr('href', link);
        //     return false;
        // });

        $.ajax({
            type: "GET",
            //            url: "//projects.eclipse.org/jsonp/technology/Internet%20of%20Things",
            //            dataType: "jsonp",
            url: "/projects.json",
            dataType: "json",
            cache: true,
            success: function(data) {

                var projectBoxes = {};
                var projectInfos = [];

                var val = 20;
                $('.progress-bar').css('width', val + '%').attr('aria-valuenow', val);

                var i = 0;

                $.each(data, function(key, value) {
                    i++;
                    var val = 20 + (i / Object.keys(data).length) * 80;

                    $('.progress-bar').css('width', val + '%').attr('aria-valuenow', val);


                    // Clean up and remove HTML.
                    if (value.id in projectAliases) {
                        value.name = projectAliases[value.id];
                    }

                    var title = stringJanitor(value.name);
                    var id = stringJanitor(value.id);
                    var link = value.website;
                    if (!validateUrl(link)) {
                        link = "http://projects.eclipse.org/projects/" + id;
                    }
                    var desc = stringJanitor(value.description, {
                        "cut": true,
                        "ellipsis": ' [&hellip;] <br><a href="' + link + '"> Read more&hellip;</a>'
                    });

                    var logo = value.logo;
                    var style = "";
                    var showlogo = true;

                    if (id == 'rt.ecf' || id == 'tools.mtj' || id == "technology.koneki" || id == "tools.titan")
                        return true;

                    projectInfo = {};
                    projectInfo.link = value.website;
                    projectInfo.logo = value.logo || 'http://fakeimg.pl/400x200/f5f5f5/000/?text=' + title //; || 'https://placeholdit.imgix.net/~text?txtsize=42&txt=' + title + '&w=200&h=80&bg=f5f5f5&txtclr=000000' ; //|| 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
                    projectInfo.id = id;
                    projectInfo.name = title;
                    projectInfo.labels = '';
                    for (var k in projectsAssociation) {
                        if (projectsAssociation[k][value.id]) {
                            projectInfo.labels += ' ' + ' <span class="label label-warning">' + k + '</span>'
                        }
                    }

                    projectInfo.description = desc;
                    var downloads = downloadStats[value.id] || 0;
                    projectInfo.downloads = downloads;
                    projectInfo.downloadsHuman = (downloads == 0) ? 'N/A' : numeral(downloads).format('0.[0] a');
                    projectInfo.version = releases[value.id] || 'none';

                    projectInfos.push(projectInfo);

                    i++;
                });


                // Insert html and resize the boxes.
                //$("#update-project").append('</div>' + output);
                //resize();

                var options = {
                    item: '<li class="col-md-12"><div class="media">\
                              <div class="media-left media-middle">\
                                <a href="#" class="link">\
                                  <img class="media-object img-responsive logo img-thumbnailXXX">\
                                </a>\
                              </div>\
                              <div class="media-body">\
                                <h4 class="media-heading name"> </h4><span class="labels"></span>\
                                <p class="description"></p>\
                                <p class="downloads" style="display:none;"></p>\
                                <div class="row">\
                                    <div class="col-md-3 col-md-offset-3">Monthly downloads <span class="badge downloadsHuman">50K+</span></a></div>\
                                    <div class="col-md-3">Latest release <span class="badge version">1.4</span></a></div>\
                                    <div class="col-md-3"><button class="btn btn-sm btn-info">Download</button></div>\
                                </div>\
                              </div>\
                            </div><hr></li>',
                    valueNames: ['name', 'description', {
                            name: 'logo',
                            attr: 'src'
                        }, 'downloads', 'downloadsHuman', 'version', {
                            name: 'link',
                            attr: 'href'
                        },
                        'labels'
                    ]
                };

                var list = new List('project-list-v2', options, projectInfos);

                list.sort('downloads', {
                    order: "desc"
                });

                for (var i in list.visibleItems) {
                    var elem = list.visibleItems[i].elm;
                    var logoElem = $("img.logo", elem);

                    if (logoElem.attr('src').includes('fakeimg')) {
                        logoElem.addClass('has-placeholder-logo');
                    }
                }

                $("#update-project").empty();
                $("#update-project").removeClass("loading");

                //    setTimeout(1000, rez;


            },
        });

    });

    // Validate URL.
    var validateUrl = function validateUrl(str) {
        return (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i).test(str);
    };

    // Set same height to all .itembox in a row.
    var resize = function() {
        $('li').css({
            "height": "auto"
        });
        $('ul').each(function() {
            var highestBox = 0;
            $('li', this).each(function() {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).outerHeight();
                }
            });
            $('li', this).height(highestBox);
        });
    };

    // Remove html, add ellipsis and cut strings.
    var stringJanitor = function(str, options) {
        var settings = $.extend({
            // These are the defaults.
            start: 0,
            end: 250,
            html: false,
            ellipsis: "",
            cut: false,
        }, options);
        var text = "";
        // Remove HTML.
        if (!settings.html) {
            text = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/g, "");
        }

        // Shorten the string.
        if (settings.cut) {
            if (text.length < settings.end) {
                return text;
            } else {
                var cutat = text.lastIndexOf(' ', settings.end);
                if (cutat !== -1) {
                    text = text.substring(settings.start, cutat) + settings.ellipsis;
                }
            }
        }
        return text;
    };

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter