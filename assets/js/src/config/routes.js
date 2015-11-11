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
  })
  .state('newQA', {
    url: "/new-qa",
    templateUrl: "views/newQa.tmpl.html",
    controller: "NewQaCtrl",
    controllerAs: "newQaCtrl",
    authenticate: false
  })
  .state('profile', {
    url: "/profile",
    templateUrl: "views/profile.tmpl.html",
    controller: "ProfileCtrl",
    controllerAs: "profileCtrl",
    authenticate: false
  })
  .state('showQA', {
    url: "/:subjectId/show-qa",
    templateUrl: "views/showQa.tmpl.html",
    controller: "ShowQaCtrl",
    controllerAs: "showQaCtrl",
    authenticate: false
  })
  .state('subjects', {
    url: "/subjects",
    templateUrl: "views/subjects.tmpl.html",
    controller: "SubjectsCtrl",
    controllerAs: "subjectsCtrl",
    authenticate: false
  });
}]);