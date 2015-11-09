angular.module('Qbank')
  .service('AuthenticationService', function(){
    var AuthenticationService = this;
    
    AuthenticationService.signup = function(username, password) {
      Parse.User.signUp(username, password, null, {
        success: function(user) {
          console.log("Signedup as " + user.get("username"));
        }, error: function(user, error) {
          console.log("Error signing up: " + error.message);
        }
      });
    };

  });
