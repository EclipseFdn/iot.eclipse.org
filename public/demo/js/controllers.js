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
    $scope.light = {
        value: 'off',
        timestamp: dateFormat(new Date()),
    }
    $scope.webcam = {
        src: "http://benjamin-cabe.com:8082/index1.jpg"
    }

    var client = new Messaging.Client("ws://iot.eclipse.org/ws", "gh-" + new Date().getTime());
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect
    });

    function onConnect() {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        client.subscribe("javaonedemo/eclipse-greenhouse-ben-flat/sensors/#");
    };

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
            console.log("Reconnecting... [" + new Date() + "]");
            client.connect({
                onSuccess: function() {
                    client.subscribe("javaonedemo/eclipse-greenhouse-ben-flat/sensors/#");
                }
            });
        }
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

    $scope.switchLight = function() {
        console.log('toggle');
        var message = new Messaging.Message(($scope.light.value === "on") ? "off" : "on");
        message.destinationName = "javaonedemo/eclipse-greenhouse-ben-flat/actuators/light";
        client.send(message);
    }
}
