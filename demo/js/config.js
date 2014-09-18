'use strict';

var device_id = "#";
var server_url = "http://iot.eclipse.org/m3da/clients";

appmodule.factory('config', function() {
	var config = {
	    serverURL: "http://edge.m2mop.net",
	    applicationName: "greenhouse",
	    temperaturePath: "greenhouse.data.temperature",
	    luminosityPath: "greenhouse.data.luminosity",
	    humidityPath: "greenhouse.data.humidity",
	    roofPath: "greenhouse.data.open",
	    roofCmd: "greenhouse.data.toggleRoof"
	};
	return config;
    });