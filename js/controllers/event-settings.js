myApp.controller('EventSettingsController', function(
	$scope, $rootScope, $firebase, $routeParams,
  $firebaseSimpleLogin, $location, FIREBASE_URL) {

	$scope.eventID = $routeParams.eId;
  $scope.userID = $routeParams.uId;

  ref = new Firebase(FIREBASE_URL + '/users/' + $scope.whichuser + '/events/' + $scope.whichevent + '/divisions');
	
  $scope.addDivision() = function () {
  	var eventObj = $firebase(ref);

  	var myData = {
  		division: $scope.event.division,
  		weightMin: $scope.event.weightMin,
  		weightMin: $scope.event.weightMin,
  		rank: $scope.event.rank
  	};

  	eventObj.$push($myData).then(function() {
  		$location.path('/events');
  	});
  }

}])