'use strict';

/* Controllers */

function DeviceDetailCtrl($scope, $routeParams, $timeout, restService,
    config) {

    var dateFormat = d3.time.format("%c")

    $scope.deviceId = $routeParams.deviceId
    $scope.temperature = {
        value: 0.0,
        timestamp: dateFormat(new Date())
    }
    $scope.luminosity = {
        value: 0.0,
        timestamp: dateFormat(new Date())
    }
    $scope.humidity = {
        value: 0.0,
        timestamp: dateFormat(new Date())
    }
    $scope.webcam = {
        src: "http://benjamin-cabe.com:8082/index1.jpg"
    }
    $scope.roof = {
        value: "TOGGLE",
        img: "roof_OPEN.svg",
        timestamp: dateFormat(new Date())
    }

    var client = new Messaging.Client("ws://iot.eclipse.org/ws", "clientId");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect
    });

    function onConnect() {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        client.subscribe("greenhouse/LIVE/benjamin-bbb/data/#");
    };

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0)
            console.log("onConnectionLost:" + responseObject.errorMessage);
    };

    function onMessageArrived(message) {
        var topic = message.destinationName;
        var sensor = topic.substring(topic.lastIndexOf("/") + 1, topic.length);
        //console.log("SENSOR: " + sensor);
        if ($scope[sensor]) {
            $scope[sensor].value = message.payloadString;
            $scope[sensor].timestamp = dateFormat(new Date());
            $scope.$apply();
        }
        //console.log("onMessageArrived: "+message.destinationName +": " +message.payloadString);
    };

    function tick() {
        $scope.webcam.src = "http://www.benjamin-cabe.com/webcam.jpg#" + new Date().getTime();
        $timeout(tick, 1000);
    }
    //tick();

    $scope.toggleRoof = function() {
        console.log('toggle');
        var message = new Messaging.Message("TOGGLE");
        message.destinationName = "greenhouse/LIVE/benjamin-bbb/command/toggleRoof";
        client.send(message);
    }
}