angular.module('Qbank')
.controller('NavCtrl', function(firebaseService, $state, $location){
  var navCtrl = this;
  console.log($location.path())

  navCtrl.navColor = function() {
    if ($location.path() == '/' ) {
      return "false";
    } else {
      return 'true';
    }
  }

  navCtrl.logout = firebaseService.logout;

  navCtrl.isLoggedIn = function() {
    return firebaseService.isLoggedIn;
  }

  navCtrl.currentUser = function() {
    return firebaseService.currentUser;
  }

  navCtrl.logText = function() {
    return firebaseService.logText;
  }
  navCtrl.userText = function()  {
    return firebaseService.userText;
  }

  navCtrl.authData = function() {
    return firebaseService.loggedIn;
  }

  console.log("The authData is " + navCtrl.authData());
});
