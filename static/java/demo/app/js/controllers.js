'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('GreenhousesListController', ['$scope', '$timeout', 'appSettings', '$http', '$routeParams',

        function($scope, $timeout, appSettings, $http, $routeParams) {
            if (angular.isUndefined($routeParams.simulatorName) &&
                angular.isUndefined($routeParams.remoteName)) {
                $scope.multi = true;
            }

            /**
             * MQTT Initialization
             **/

            console.log(appSettings);

            var client = new Paho.MQTT.Client("ws://iot.eclipse.org/ws", "gh-" + new Date().getTime());
            client.onConnectionLost = function(responseObject) {
                if (responseObject.errorCode !== 0) {
                    console.log("onConnectionLost:" + responseObject.errorMessage);
                    console.log("Reconnecting... [" + new Date() + "]");
                    client.connect({
                        onSuccess: function() {
                            client.subscribe(appSettings.topic_prefix + "+/+/#");
                        }
                    });
                }
            };

            client.onMessageArrived = function(message) {
                var topic = message.destinationName;
                var topicFragments = topic.split('/');
                // topicFragments[0] == {appSetting.topic_prefix}
                // topicFragments[1] == {unique_id}
                // topicFragments[2] == "actuators"
                // topicFragments[3] == {actuatorName} (e.g. light)

                var uniqueId = topicFragments[1];
                var actuatorName = topicFragments[3];

                // simulators lookup to update light states
                if (topicFragments[2] === "actuators") {
                    for (var i in $scope.greenhouse_simulators) {
                        var greenhouse = $scope.greenhouse_simulators[i];
                        if (greenhouse.name === uniqueId) {
                            if (topicFragments[3] === "light") {
                                greenhouse.lightState = message.payloadString;
                                // publish on sensors/light to acknowledge that
                                // the state change is successful
                                var message = new Paho.MQTT.Message(greenhouse.lightState);
                                message.destinationName = appSettings.topic_prefix + greenhouse.name + "/sensors/light";
                                message.retained = true;
                                client.send(message);
                            }

                            $scope.$apply();
                            break;
                        }
                    }
                }

                // remotes lookup to update temperatures
                if (topicFragments[2] === "sensors") {
                    for (var i in $scope.greenhouse_remotes) {
                        var greenhouse = $scope.greenhouse_remotes[i];
                        if (greenhouse.name === uniqueId) {
                            if (topicFragments[3] === "temperature") {
                                if ("blink2" === greenhouse.pulse)
                                    greenhouse.pulse = "blink";
                                else
                                    greenhouse.pulse = "blink2";
                                greenhouse.temperature = message.payloadString;
                            } else if (topicFragments[3] === "light") {
                                greenhouse.lightState = message.payloadString;
                            }

                            $scope.$apply();
                            break;
                        }
                    }
                }
            };

            client.connect({
                onSuccess: function() {
                    $scope.$apply(function() {
                        if (angular.isDefined($routeParams.simulatorName)) {
                            $scope.addGreenhouseSimulator($routeParams.simulatorName);
                            $scope.simulatorName = $routeParams.simulatorName;
                        } else if (angular.isDefined($routeParams.remoteName)) {
                            $scope.addGreenhouseRemote($routeParams.remoteName);
                            $scope.remoteName = $routeParams.remoteName;
                        }
                    });
                    client.subscribe(appSettings.topic_prefix + "+/+/#");
                }
            });

            $scope.greenhouse_simulators = [];
            $scope.addGreenhouseSimulator = function(name) {
                if (name === undefined) {
                    name = randomMAC();
                }

                var greenhouse = {
                    name: name,
                    temperature: Math.floor((Math.random() * 10) + 20),
                    refreshInterval: 2,
                };

                var publishTemperatureRegularly = function() {
                    if ("blink2" === greenhouse.pulse)
                        greenhouse.pulse = "blink";
                    else
                        greenhouse.pulse = "blink2";

                    var message = new Paho.MQTT.Message("" + greenhouse.temperature);
                    message.destinationName = appSettings.topic_prefix + greenhouse.name + "/sensors/temperature";
                    client.send(message);

                    greenhouse.timer = $timeout(publishTemperatureRegularly, greenhouse.refreshInterval * 1000);
                }

                publishTemperatureRegularly();

                $scope.greenhouse_simulators.push(greenhouse);
            };

            $scope.greenhouse_remotes = [];
            $scope.addGreenhouseRemote = function(name) {
                if (name === undefined) {
                    name = randomMAC();
                }

                var greenhouse = {
                    name: name,
                    toggleLight: function() {
                        var message = new Paho.MQTT.Message((this.lightState === "on") ? "off" : "on");
                        message.destinationName = appSettings.topic_prefix + this.name + "/actuators/light";
                        client.send(message);
                    }
                };

                $scope.greenhouse_remotes.push(greenhouse);

            }
        }

    ]);

// do not declare globally?
function randomMAC() {
    var name = '54:52:00';

    for (var i = 0; i < 6; i++) {
        if (i % 2 === 0) name += ':';
        name += Math.floor(Math.random() * 16).toString(16);
    }

    return name;
}