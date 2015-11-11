angular.module('Qbank')
.controller('NavCtrl', function(firebaseService, $state, $location){
  var navCtrl = this;
  console.log($location.path())

  navCtrl.navColor = function() {
    if ($location.path() == '/' ) {
      return false;
    } else {
      return true;
    }
  }

  navCtrl.currentUser = function() {
    return firebaseService.currentUser;
  }

  navCtrl.users = firebaseService.users;

  navCtrl.getScore = function() {
    var userScore;
    angular.forEach(navCtrl.users, function(user) {
      if (navCtrl.currentUser().uid == user.uid) {
        userScore = user.score;
      }
    });
    return userScore;
  }

  navCtrl.logout = firebaseService.logout;

  navCtrl.isLoggedIn = function() {
    return firebaseService.isLoggedIn;
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
