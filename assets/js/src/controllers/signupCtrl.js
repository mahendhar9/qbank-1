angular.module('Qbank')
.controller('SignupCtrl', function(AuthenticationService){
  var signupCtrl = this;

  signupCtrl.user= {};

  signupCtrl.signup =function(){
    var username=signupCtrl.user.username;
    var password=signupCtrl.user.password;
    AuthenticationService.signup(username,password);
  }
});