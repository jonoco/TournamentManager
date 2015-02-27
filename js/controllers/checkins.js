myApp.controller('CheckInsController', function(
  $scope, $rootScope, $firebase, $routeParams,
  $firebaseSimpleLogin, $location, FIREBASE_URL) {

  $scope.whichevent = $routeParams.eId;
  $scope.whichuser = $routeParams.uId;
  $scope.order="firstname"; 
  $scope.direction="";

  var ref = new Firebase(FIREBASE_URL + '/users/' + $scope.whichuser + '/events/' + $scope.whichevent);
  var eventInfo = $firebase(ref).$asObject();
  eventInfo.$loaded().then(function () {
    $scope.eventName = eventInfo.name;  
  });

  ref = new Firebase(FIREBASE_URL + '/users/' + $scope.whichuser + '/events/' + $scope.whichevent + '/checkins');
  var checkinsList = $firebase(ref).$asArray();
  $scope.checkins = checkinsList;

  $scope.addCheckin = function() {
    var checkinsObj = $firebase(ref);

    var myData = {
      firstname: $scope.user.firstname,
      lastname: $scope.user.lastname,
      email: $scope.user.email,
      dob: $scope.user.dob,
      gym: $scope.user.gym,
      weight: $scope.user.weight,
      rank: $scope.user.rank,
      date: Firebase.ServerValue.TIMESTAMP
    };

    checkinsObj.$push(myData).then(function() {
      $location.path('/checkins/' + $scope.whichuser + '/' +
        $scope.whichevent + '/checkinsList');
    }); //data sent to firebase.
  } //addCheckin

  $scope.deleteCheckin = function(id) {
    var record = $firebase(ref);
    record.$remove(id);
  } //delete Checkin


}); //CheckInsController