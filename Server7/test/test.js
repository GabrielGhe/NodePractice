"use strict"

describe("Testing the controller 'HomeCtrl'", function(){

	//load app
	beforeEach(angular.mock.module("MyApp"));
	beforeEach(function(){
		module('ngRoute');
		module('ngAnimate');
		module('ui.bootstrap');
	})

	var homeCtrl, scope;

	beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
		homeCtrl = $controller("HomeCtrl", {
			$scope : scope
		});
	}));

	//test0
	it("test0 should say Hello", function(){
		expect(scope.test0).toBe("Hello");
	});

	//test1
	it("test1 should say Blah", function(){
		expect(scope.test1).toBe("Blah");
	});

	//test2
	it("test2 should be length 5", function(){
		expect(scope.test2.length).toBe(5);
	});

	//test2 add
	it("test2 should be length 6 after add", function(){
		scope.add(22);
		expect(scope.test2.length).toBe(6);
	});
});