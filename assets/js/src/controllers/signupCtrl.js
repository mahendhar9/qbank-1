angular.module('Qbank')
.controller('SignupCtrl', function($state, firebaseService){
  var signupCtrl = this;

  signupCtrl.user= {};

  signupCtrl.signup =function(){
    var email=signupCtrl.user.email;
    var password=signupCtrl.user.password;
    firebaseService.signup(email, password);
    signupCtrl.user= {};
    $state.go('subjects');
  }
});