'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
  		var todosInStore = localStorageService.get('todos');
      $scope.todos = todosInStore || [];
      $scope.$watch('todos', function () {
        localStorageService.set('todos', $scope.todos);
      }, true);

var globalId = 0;

var inputRefresh = function(){
  for (var i = 0; i<$scope.todos.length;i++){
    var idxno = 'idx'+i;
    $scope[idxno] = true;
  };
};
  
inputRefresh();  

var chkitemExist = function(){
  var chkitem = $scope.todos.indexOf($scope.todo);
  return (chkitem === -1)? true : false;
}
  
  $scope.addTodo = function(){
    if ($scope.todo){
  	if (chkitemExist()){
    $scope.todos.push($scope.todo);
    inputRefresh();
  	$scope.todo='';
    $scope.errormessage = '';
  } else {
    $scope.errormessage = 'Sorry item existed';
  }
  }

  };		

    $scope.removeTodo = function(id){
  	console.log(id);
  	$scope.todos.splice(id, 1);
  };

    $scope.editTodo = function(id){

      console.log(id);
      globalId = id;
      var idxno = 'idx'+id;
      inputRefresh();
      //$scope[idxno] = false;
      $scope.todo = $scope.todos[id];
      $scope.updateBtn = false;
    };

    $scope.updateData = function(){
      if($scope.todo){
      if(chkitemExist()){  
      console.log(globalId);
      $scope.todos[globalId] = $scope.todo;
      $scope.todo='';
    } else {
    $scope.errormessage = 'Sorry item existed';
  };
    };
    };
  });
