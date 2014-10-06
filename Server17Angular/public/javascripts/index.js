"use strict";

var MyApp = angular.module("MyApp", ["ngRoute"]);

MyApp.config(["$routeProvider", "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/:id", {
        templateUrl: "partials/partialId.html",
        controller: "idCtrl"
      })
      .when("/", {
        templateUrl: "partials/home.html",
        controller: "homeCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
  }
]);