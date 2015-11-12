angular.module('Qbank')
.controller('HomeCtrl', function(firebaseService){
  var homeCtrl = this;

  homeCtrl.isLoggedIn = function() {
    return firebaseService.isLoggedIn;
  }
});