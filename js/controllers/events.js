myApp.controller('EventsController', function(
  $scope, $rootScope, $firebase, $firebaseSimpleLogin, FIREBASE_URL) {

var ref = new Firebase(FIREBASE_URL);
var simpleLogin = $firebaseSimpleLogin(ref);

  simpleLogin.$getCurrentUser().then(function(authUser) {

    if (authUser !== null) {
      var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid + '/events');
      var eventsInfo = $firebase(ref);
      var eventsObj = $firebase(ref).$asObject();
      var eventsArray = $firebase(ref).$asArray();

      eventsObj.$loaded().then(function(data) {
        $scope.events = eventsObj;
      }); // events Object Loaded

      eventsArray.$loaded().then(function(data) {
        $rootScope.howManyEvents = eventsArray.length;
      }); // events Array Loaded

      eventsArray.$watch(function(event) {
        $rootScope.howManyEvents = eventsArray.length;
      });

      $scope.addEvent=function() {
        eventsInfo.$push({
          name: $scope.eventName,
          date: Firebase.ServerValue.TIMESTAMP
        }).then(function() {
          $scope.eventName = '';
        });
      } //addmeeting

      $scope.deleteEvent=function(key) {
        eventsInfo.$remove(key);
      } //deletemeeting

    } // user exists

  }); //get current user

}); //eventsController