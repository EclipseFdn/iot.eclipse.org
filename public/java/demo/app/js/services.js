'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
constant('appSettings', {
    topic_prefix: "javaonedemo/"
});