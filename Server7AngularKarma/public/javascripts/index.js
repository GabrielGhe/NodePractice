var MyApp = angular.module('MyApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

//Routing Configuration 
MyApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', { templateUrl : "partials/home.html", controller : "HomeCtrl"})
		.otherwise({ redirectTo : '/'});

	$locationProvider.html5Mode(true);
}]);


/* ###############################################################################
 * ##
 * ##							HomeCtrl
 * ##
 * ############################################################################### */
MyApp.controller("HomeCtrl", ["$scope", function($scope){

	$scope.Init = function(){
		$scope.test1 = "Blah";
		$scope.test2 = [1,3,5,7,8];
		$scope.test3 = "";
 	}

 	$scope.add = function(element){
 		$scope.test3 = "";
 		$scope.test2.push(element);
 	}

 	$scope.remove = function(idx){
 		$scope.test2.splice(idx, 1);
 	}

 	$scope.test0 = "Hello";
	$scope.Init();
}]);
