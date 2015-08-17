var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	console.log("Hello World");

	var refresh = function() {
		$http.get('/contactlist').success(function(response){
			console.log("got da data");
			$scope.contactList = response;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id) {
		console.log(id);

	}

}]);