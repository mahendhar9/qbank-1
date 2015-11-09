angular.module('Qbank')
.controller('LoginCtrl', function(AuthenticationService){
  var loginCtrl = this;

  loginCtrl.user= {};

  loginCtrl.login =function(){
    var username=loginCtrl.user.username;
    var password=loginCtrl.user.password;
    AuthenticationService.login(username,password);
  }
});