angular.module('Qbank')
.service('firebaseService', function($state, $firebaseArray, $firebaseAuth, $firebaseObject){
  var firebaseService = this;

  firebaseService.rootRef = new Firebase("https://qbank.firebaseio.com/");
  
  firebaseService.auth = $firebaseAuth(firebaseService.rootRef);

  firebaseService.qaRef = firebaseService.rootRef.child("questions");

  firebaseService.userRef = firebaseService.rootRef.child("users");

  firebaseService.questions = $firebaseArray(firebaseService.qaRef);

  firebaseService.users = $firebaseArray(firebaseService.userRef);

  firebaseService.userText = '';

  firebaseService.signup = function(email, password) {
    firebaseService.rootRef.createUser({
      email    : email,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        firebaseService.login(email, password);
      }
    });
  }

  firebaseService.login = function(email, password) {
    firebaseService.rootRef.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        firebaseService.userObj = $firebaseObject(firebaseService.userRef.child(authData.uid));
        firebaseService.userObj.uid = authData.uid;
        firebaseService.userObj.email = authData.password.email;
        firebaseService.userObj.score = 0;
        firebaseService.userObj.role = 2;

        // Check if user exists
        firebaseService.userRef.child(firebaseService.userObj.uid).once('value', function(snapshot) {
          var exists = (snapshot.val() !== null);
          console.log("Does user exist? " + exists);
          if (!exists) {
            firebaseService.userObj.$save();
            console.log("User added")
          }
          else {
            console.log("User not added");
          }
        });

        firebaseService.logText = "Logout";
      }
    });
};

firebaseService.logout = function() {
  firebaseService.auth.$unauth();
  $state.go('home');
  // $state.go('home', {}, {reload: true});
}

firebaseService.create = function(question, option1, option2, option3, correctOption, subjectCategory) {
  var qaObj = {
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    correctOption: correctOption,
    subjectCategory: subjectCategory
  };
  firebaseService.questions.$add(qaObj);
}

firebaseService.queryUser = function(query) {
  var queryUser;
  var query = query;
  angular.forEach(firebaseService.users, function(user) {
    if (firebaseService.currentUser) {
      if (firebaseService.currentUser.uid == user.uid) {
        queryUser = user[query];
      }
    }
  });
  return queryUser;
}

firebaseService.auth.$onAuth(function(authData) {
  if (authData) {
    console.log(authData);
    firebaseService.currentUser = authData;
    firebaseService.isLoggedIn = true;
  } else {
    console.log("AuthData LoggedOut" );
    firebaseService.isLoggedIn = false;
  }
});
});