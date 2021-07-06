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
        'iot.wakaama': true,
        'iot.leshan': true,
        'iot.concierge': true,
        'iot.4diac': true,
        'iot.tinydtls': true,
        'iot.milo': true,
        'iot.cyclonedds':true,
        'iot.unide': true,
        'iot.thingweb': true,
        'iot.tahu': true,
        'iot.keyple': true,
        'iot.amlen': true,
        'iot.oneofour': true,
        'iot.sparkplug': true
    },

    'Devices': {
        'automotive.kuksa': true,
        'iot.concierge': true,
        'iot.cyclonedds':true,
        'iot.hawkbit.hara': true,
        'iot.mita': true,
        'iot.mraa': true,
        'iot.paho': true,
        'iot.paho.incubator': true,
        'iot.sparkplug': true,
        'iot.tahu': true,
        'iot.upm': true,
        'iot.volttron': true,
        'iot.wakaama': true,
        'iot.zenoh': true,
    },

    'Gateways': {
        'iot.agail': true,
        'iot.concierge': true,
        'iot.kura': true,
        'iot.leshan': true,
        'iot.mraa': true,
        'iot.sparkplug': true,
        'iot.tahu': true,
        'iot.upm': true,
        'iot.volttron': true,
    },

    'Cloud': {
        'iot.amlen': true,
        'iot.arrowhead': true,
        'iot.ditto': true,
        'iot.hawkbit': true,
        'iot.hono': true,
        'iot.kapua': true,
        'iot.leshan': true,
        'iot.mosquitto': true,
        'iot.sparkplug': true,
        'iot.streamsheets': true,
        'iot.tahu': true,
        'iot.volttron': true,
        'iot.vorto': true,
    },

    'Tools': {
        'iot.4diac': true,
        'iot.editdor': true,
        'iot.embed-cdt': true,
        'iot.packages': true,
    },

    'Models': {
        'iot.vorto': true,
        'iot.unide': true,
        'iot.thingweb': true
    },

    'Security': {
        'iot.californium': true,
        'iot.keti': true,
        'iot.leshan': true,
        'iot.tinydtls': true,
    },

    'Edge': {
        'iot.fog05': true,
        'iot.iofog': true,
        'iot.kura': true,
        'iot.mosquitto': true,
        'iot.zenoh': true,
    },


    // rest is 'others' (Ignite, ...)
};


var projectAliases = {
    'iot.californium': 'Eclipse Californium',
    'iot.4diac': 'Eclipse 4DIAC'
};


(function($, window, document) {
    $(function() {

        $.ajax({
            type: "GET",
            url: "/assets/js/projects.json",
            dataType: "json",
            cache: true,
            success: function(data) {

                var projectBoxes = {};
                var projectInfos = [];

                var val = 20;
                $('.progress-bar').css('width', val + '%').attr('aria-valuenow', val);

                var i = 0;

                $.each(data, function(key, value) {
                    
                    if (value.state === "Archived") {
                      return true;
                    }
                  
                    i++;
                    var val = 20 + (i / Object.keys(data).length) * 80;

                    $('.progress-bar').css('width', val + '%').attr('aria-valuenow', val);


                    // Clean up and remove HTML.
                    if (value.project_id in projectAliases) {
                        value.name = projectAliases[value.project_id];
                    }

                    var title = stringJanitor(value.name);
                    var id = stringJanitor(value.project_id);
                    var link = value.url;
                    if (!validateUrl(link)) {
                        link = "http://projects.eclipse.org/projects/" + id;
                    }
                    var desc = stringJanitor(value.summary, {
                        "cut": true,
                        "ellipsis": ' [&hellip;] <br><a href="' + link + '"> Read more&hellip;</a>'
                    });

                    var logo = value.logo;
                    var style = "";
                    var showlogo = true;

                    if (id == 'rt.ecf' || id == 'tools.mtj' || id == "technology.koneki" || id == "tools.titan" || id == "iot.tiaki"  || id == "technology.sensinact"  || id == "technology.iottestware"  || id == "iot.krikkit" || id == "technology.uomo" || id == "iot.risev2g")
                        return true;

                    projectInfo = {};
                    projectInfo.link = value.url;
                    if (!validateUrl(projectInfo.link)) {
                        projectInfo.link = "http://projects.eclipse.org/projects/" + id;
                    }
                    projectInfo.logo = value.logo || '//fakeimg.pl/400x200/f5f5f5/000/?text=' + title //; || 'https://placeholdit.imgix.net/~text?txtsize=42&txt=' + title + '&w=200&h=80&bg=f5f5f5&txtclr=000000' ; //|| 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
                    projectInfo.id = id;
                    projectInfo.name = title;
                    projectInfo.logo_alt = title;

                    projectInfo.project_state = value.state;

                    projectInfo.labels = '';
                    for (var k in projectsAssociation) {
                        if (projectsAssociation[k][value.project_id]) {
                            projectInfo.labels += ' ' + ' <span class="badge">' + k + '</span>'
                        }
                    }

                    projectInfo.description = desc;
                    projectInfo.fullDescription = stringJanitor(value.summary);
                    projectInfo.version = 'none';
                    if (value.releases[0]) {
                      projectInfo.version = value.releases[0].name;
                    }
                    
                    projectInfo.downloadUrl = value.url;

                    projectInfos.push(projectInfo);

                    i++;
                });

                var options = {
                    item: '<li class="col-md-24"><div class="media">\
                              <div class="row"><div class="col-sm-4">\
                                <a href="#" class="link">\
                                  <img class="media-object img-responsive logo logo_alt center-block" alt="project">\
                                </a>\
                              </div>\
                              <div class="col-sm-20">\
                                 <h4 class="media-heading name"> </h4><span class="labels"></span>\
                                   <div class="row">\
                                    <p class="fullDescription" style="display:none;"></p>\
                                    <p class="description col-md-16"></p>\
                                    <div class="col-md-8 details"><div class="row">\
                                        <p class="downloads" style="display:none;"></p>\
                                        <div class="col-md-24"><p>Latest release: <span class="badge version">1.4</span></p></div>\
                                        <div class="col-md-24 margin-bottom-10"><p>Project status: <span class="badge project_state">Incubating</span></p></div>\
                                        <div class="col-md-24"><p><a class="btn btn-sm btn-primary downloadUrl" href="#">Get Started</a></p></div>\
                                    </div></div>\
                                </div>\
                              </div></div>\
                            </div><hr></li>',
                    valueNames: ['name', 'description', 'fullDescription', {
                            name: 'logo',
                            attr: 'src'
                        }, 'version', {
                            name: 'link',
                            attr: 'href'
                        }, {
                            name: 'downloadUrl', attr:'href',
                        }, {
                          name: 'logo_alt', attr: 'alt'
                        },
                        'labels', 'project_state'
                    ]
                };

                var list = new List('project-list', options, projectInfos);

                for (var i in list.visibleItems) {
                    var elem = list.visibleItems[i].elm;
                    var logoElem = $("img.logo", elem);

                    if (logoElem.attr('src').includes('fakeimg')) {
                        logoElem.addClass('has-placeholder-logo');
                    }
                }

                $("#update-project").empty();
                $("#update-project").removeClass("loading");

                $('.btn-filter-project').on('click', function() {    setTimeout(function() {
                    list.filter();
                    list.filter(computeFilterFunction());
                    }, 10) ; });

            },
        });

    });

    var computeFilterFunction = function() {
        console.log("recompute filter");
        return function(item) {
            var filter = [];

            $('.btn-filter-project').each( function(index, elem) {
                console.log($(elem));
                if ($(elem).hasClass('active')) 
                    filter.push($(elem).text());
            });

            console.log(filter);

            if(filter.length == 0) return true;

            var found = false;

            for (var i = 0; i < filter.length; i++) {
                var element = filter[i]
                if(item.values().labels.indexOf(element) !== -1) {
                    found = true;
                    continue;
                }
                found = false;
                break;
            }

            return found;
        }

    }

    // Validate URL.
    var validateUrl = function validateUrl(str) {
        return (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i).test(str);
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