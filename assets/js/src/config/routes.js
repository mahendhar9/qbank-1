angular.module('Qbank')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/home.tmpl.html",
        controller: "HomeCtrl",
        controllerAs: "homeCtrl",
        authenticate: false
      })
      .state('signup', {
        url: "/signup",
        templateUrl: "views/signup.tmpl.html",
        controller: "SignupCtrl",
        controllerAs: "signupCtrl",
        authenticate: false
      })
      .state('login', {
        url: "/login",
        templateUrl: "views/login.tmpl.html",
        controller: "LoginCtrl",
        controllerAs: "loginCtrl",
        authenticate: false
      });
     
     
  }]);