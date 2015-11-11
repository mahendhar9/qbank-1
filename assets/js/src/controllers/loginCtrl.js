angular.module('Qbank')
.controller('LoginCtrl', function(firebaseService, $state){
  var loginCtrl = this;

  loginCtrl.user= {};

  loginCtrl.login =function(){
    var email=loginCtrl.user.email;
    var password=loginCtrl.user.password;
    firebaseService.login(email,password);
    loginCtrl.user= {};
    $state.go('subjects');
  }
});