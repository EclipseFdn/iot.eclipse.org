'use strict';

/* Services */

angular.module('greenhouseServices', []).
factory('restService', function($http){
	var services = {}

	services.getDeviceData = function(deviceId, successHandler, errorHandler){
		$http.get(server_url+"/"+deviceId+"/data")
		.success(function (data){
			
			var response = {
				temperature: {},
				luminosity: {},
				humidity: {},
				open: {}
			};

			response.temperature.value = data["greenhouse.data.temperature"][0].value[0];
			response.temperature.timestamp = data["greenhouse.data.temperature"][0].timestamp;

			response.luminosity.value = parseFloat(data["greenhouse.data.luminosity"][0].value[0]).toFixed(1);
			response.luminosity.timestamp = data["greenhouse.data.luminosity"][0].timestamp;

			response.humidity.value = parseFloat(data["greenhouse.data.humidity"][0].value[0]).toFixed(1);
			response.humidity.timestamp = data["greenhouse.data.humidity"][0].timestamp;

			response.open.value=(data["greenhouse.data.open"][0].value[0])?"CLOSE":"OPEN";
			response.open.timestamp = data["greenhouse.data.open"][0].timestamp;

			successHandler(response);
		})
		.error(errorHandler);
	};

	services.sendData = function(deviceId, command, successHandler, errorHandler){
		$http.post(server_url+"/"+deviceId+"/data", command)
		.success(successHandler)
		.error(errorHandler);
	};

	return services
});
