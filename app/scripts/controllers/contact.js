'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('ContactCtrl', function ($scope) {
  	$scope.toggleName = "Off";
  	$scope.clickStatus = "Status is Off";
  	$scope.inputStatus = true;
  	$scope.statusName = "input text is off";
  	$scope.hideStatus = true;
  	
  	
  	$scope.toggle = function(){
  		$scope.toggleName = ($scope.toggleName == "Off")? "On" : "Off";
  		$scope.clickStatus = ($scope.toggleName == "Off")? "Status is Off" : "Status is ON";
 		$scope.inputStatus = ($scope.toggleName == "Off")? true: false;
 		$scope.statusName = ($scope.toggleName == "Off")? "input text is off": "input text is ON";
 		$scope.textStyle = ($scope.toggleName == "Off")? " ": "text-decoration:line-through";
  		$scope.hideStatus = ($scope.toggleName == "Off")? true: false;
  		console.log($scope.toggleName);
  		console.log($scope.inputStatus);
  	}
  });
