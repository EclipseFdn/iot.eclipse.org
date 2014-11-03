'use strict';

/* App Module */

var appmodule = angular.module('greenhouse', ['greenhouseServices', 'djds4rce.angular-socialshare']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/devices/:deviceId', {templateUrl: 'partials/device-detail.html', controller: DeviceDetailCtrl}).
      otherwise({redirectTo: '/devices/'+device_id});
  }]);