/*!
 * community.js by Christopher Guindon - @chrisguindon
 * Copyright 2013 Eclipse Foundation
 * http://www.eclipse.org/org/documents/epl-v10.php
 */


var projectsAssociation = {
    "Standards": ["iot.paho", "iot.paho.incubator", "iot.californium", "iot.om2m", "iot.mosquitto", "iot.moquette", "iot.wakaama", "iot.leshan", "iot.concierge", "iot.risev2g", "iot.4diac", "iot.tiaki", "iot.tinydtls", "iot.tinydtls", "iot.milo"],

    "Frameworks": ["iot.hono", "iot.om2m", "iot.krikkit", "iot.kura", "iot.mihini", "iot.ponte", "iot.smarthome", "iot.eclipsescada", "iot.4diac", "iot.whiskers"],

    // rest is "others" (Ignite, ...)
};


var projectAliases = {
    "iot.californium": "Californium",
    "iot.4diac": "4DIAC"
};


(function($, window, document) {
    $(function() {

        $(window).resize(function() {
            resize();
        });

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
                    var desc = stringJanitor(value.description, {
                        "cut": true,
                        "ellipsis": "&hellip;"
                    });
                    var link = value.website;
                    var logo = value.logo;
                    var style = "";
                    var showlogo = true;

                    if (id == 'rt.ecf' || id == 'tools.sequoyah.mtj' || id == "technology.koneki")
                        return true;

                    var boxOutput = "";

                    boxOutput += "<li class=\"col-md-4 col-sm-6 itembox\"" + style + " id =\"" + id.replace('.', '-') + "\">";
                    if (validateUrl(logo) && showlogo === true) {
                        boxOutput += "<img class =\"logo\" alt=\"" + title + " logo\" src=\"" + logo + "\">";
                    } else {
                        boxOutput += "<h3 class=\"purple project-name\">" + title + "</h3>";
                    }

                    boxOutput += "<p>" + desc + "</p>";

                    boxOutput += "<h3>Example <span class=\"label label-default\">New</span></h3>";


                    if (!validateUrl(link)) {
                        link = "http://projects.eclipse.org/projects/" + id;
                    }


                    boxOutput += "<a href=\"" + link + "\" class=\"readmore\" target=\"_blank\">Read more</i></a>";
                    boxOutput += "<a href=\"https://projects.eclipse.org/projects/" + id + "/downloads\" class=\"download\" target=\"_blank\">Download</a>";

                    boxOutput += "</li>";

                    projectBoxes[id] = boxOutput;

                    projectInfo = {};
                    projectInfo.link = value.website;
                    projectInfo.link = value.website;
                    projectInfo.logo = value.logo || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
                    projectInfo.id = id;
                    projectInfo.name = title;
                    projectInfo.description = stringJanitor(value.description, {
                        "cut": true,
                        "ellipsis": "&hellip;"
                    });
                    projectInfo.downloads = 100;

                    projectInfos.push(projectInfo);

                    i++;
                });


                // Insert html and resize the boxes.
                //$("#update-project").append('</div>' + output);
                //resize();

                //      $('.projects-row').shuffle();

                $('.projects-row').each(function(index) {
                    $(this).find('.itembox').sort(function(a, b) {
                        // console.log(a.getAttribute('id').toLowerCase());
                        var s1 = a.getAttribute('id').toLowerCase();
                        var s2 = b.getAttribute('id').toLowerCase();

                        return s1.localeCompare(s2);
                    }).replaceAll($(this));
                });

                var options = {
                    item: '<li><div class="media">\
                              <div class="media-left media-middle">\
                                <a href="#">\
                                  <img class="media-object img-responsive logo">\
                                </a>\
                              </div>\
                              <div class="media-body">\
                                <h3 class="name"></h3><p class="description"></p>\
                              </div>\
                            </div></li>',
                    valueNames: [ 'name', 'description', { name: 'logo', attr: 'src' }] 
                };

                var list = new List('project-list-v2', options, projectInfos);


                $("#update-project").empty();
                $("#update-project").removeClass("loading");


            },
        });

    });

    // Validate URL.
    var validateUrl = function validateUrl(str) {
        return (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i).test(str);
    };

    // Set same height to all .itembox in a row.
    var resize = function() {
        $('.itembox').css({
            "height": "auto"
        });
        $('.row-fluid').each(function() {
            var highestBox = 0;
            $('.itembox', this).each(function() {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).outerHeight();
                }
            });
            $('.itembox', this).height(highestBox);
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