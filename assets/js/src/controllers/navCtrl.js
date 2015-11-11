angular.module('Qbank')
.controller('NavCtrl', function(firebaseService, $state, $location){
  var navCtrl = this;
  console.log($location.path());

  navCtrl.users = firebaseService.users;

  navCtrl.navColor = function() {
    if ($location.path() == ('/' || '')) {
      return false;
    } else {
      return true;
    }
  }

  navCtrl.currentUser = function() {
    return firebaseService.currentUser;
  }

  navCtrl.getScore = function(query) {
    return firebaseService.queryUser(query);
  }

  navCtrl.logout = firebaseService.logout;

  navCtrl.isLoggedIn = function() {
    return firebaseService.isLoggedIn;
  }

  navCtrl.userRole = function() {
    return firebaseService.queryUser("role");
  }

  navCtrl.isUserAdmin = function() {
    if (navCtrl.userRole() == 1) {
      return true;
    } else {
      return false;
    }
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
