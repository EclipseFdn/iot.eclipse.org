'use strict';

/* Controllers */

function DeviceDetailCtrl($scope, $routeParams, $timeout, restService, 
config) {

	var dateFormat = d3.time.format("%c")

	$scope.deviceId = $routeParams.deviceId
	$scope.temperature = {value: 0.0, timestamp: dateFormat(new Date())}
	$scope.luminosity = {value: 0.0, timestamp: dateFormat(new Date())}
	$scope.humidity = {value: 0.0, timestamp: dateFormat(new Date())}
	$scope.webcam = {src: "http://91.121.117.128/webcam/?action=stream"}
	$scope.roof = {value: "OFF", img: "roof_OPEN.svg", timestamp: dateFormat(new Date())}

	function tick (){
		restService.getDeviceData($routeParams.deviceId,

			function(data){
					      $scope.temperature.value = parseFloat(data.temperature.value).toFixed(1);
					      $scope.temperature.timestamp = dateFormat(new Date(parseInt(data.temperature.timestamp)));

					      $scope.luminosity.value = parseFloat(data.luminosity.value).toFixed(1);
					      $scope.luminosity.timestamp = dateFormat(new Date(parseInt(data.luminosity.timestamp)));

					      $scope.humidity.value = parseFloat(data.humidity.value).toFixed(1);
					      $scope.humidity.timestamp = dateFormat(new Date(parseInt(data.humidity.timestamp)));

					          var roof = data.open 
						  roof.img = 'roof_' + roof.value + '.svg' 
						  roof.state = (roof.value == "CLOSE")
						  $scope.roof = roof
						      $scope.roof.timestamp = dateFormat(new Date(parseInt(data.open.timestamp)));

			}, 

			function(status){console.log(status)});

		// $scope.webcam.src = "http://www.benjamin-cabe.com/webcam.jpg?" + new Date().getTime();

		$timeout(tick, 1000);
	}
	tick();

	$scope.toggleRoof = function() {


		var postData = {
			"settings": [{
				"key": "greenhouse.commands.data.toggleRoof.state",
				"value": !this.roof.state
			}]
		};

		restService.sendData($routeParams.deviceId, postData, function(data){console.log(data)}, function(status){console.log(status)});

	}
}