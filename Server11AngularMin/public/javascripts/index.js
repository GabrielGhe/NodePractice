var MyApp = angular.module("MyApp", ["ngRoute"]);


MyApp.config(["$routeProvider", "$locationProvider",
    function($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "ThingController"
            })
            .otherwise({
                redirectTo: "/"
            });
        $locationProvider.html5Mode(true);
    }
]);


MyApp.controller("ThingController", ["$scope",
    function($scope){
        $scope.something = "It works!";
    }
]);