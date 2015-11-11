// angular.module('Qbank')
// .service('AuthenticationService', function($state){
//   var AuthenticationService = this;

//   AuthenticationService.signup = function(username, password) {
//     Parse.User.signUp(username, password, null, {
//       success: function(user) {
//         console.log("Signedup as " + user.get("username"));
//       }, error: function(user, error) {
//         console.log("Error signing up: " + error.message);
//       }
//     });
//   };
//   AuthenticationService.login = function(username, password) {
//     Parse.User.logIn(username, password, {
//       success: function(user) {
//         console.log("Logged in as " + user.get("username"));
//         $state.go('newQA');
//       }, error: function(user, error) {
//         console.log("Error logging in: " + error.message);
//       }
//     });
//   };

//   AuthenticationService.currentUser = function() {
//     return Parse.User.current();
//   };
// });
