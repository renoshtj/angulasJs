var module1 = angular.module("myAJSAssignment", []);
module1.controller('myFormCtrl', ['$scope', 'myService', function($scope, myService) {
	$scope.students = [];

	angular.element(document).ready(function() {
		$scope.initialize();
	});
	$scope.initialize = function() {
		$scope.avg = 0;
		$scope.subject1 = 0;
		$scope.subject2 = 0;
		$scope.subject3 = 0;
		$scope.myName = "";
	};
	$scope.getAverage = function() {
		var sum = $scope.subject1 + $scope.subject2 + $scope.subject3;
		$scope.avg = sum / 3;
	};
	$scope.buttonClick = function() {
		$scope.students.push(myService.saveData($scope));
	};

	$scope.reset = function(form) {
		$scope.initialize();
		if (form) {
			form.$setPristine();
			form.$setUntouched();
			form.myName.$setFocus;
		}
	};

}]);

module1.service("myService", function() {
	this.saveData = function($scope) {
		student = {
			name: $scope.myName,
			subject1: $scope.subject1,
			subject2: $scope.subject2,
			subject3: $scope.subject3,
			average: $scope.avg
		};
		return student;
	}
});
//module1.factory('myFactory', function () {
 // var _artist = '';
  //var service = {}

  //service.getArtist = function () {
  //  return _artist
  //}

 // return service;
//});				
