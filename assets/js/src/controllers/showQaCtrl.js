angular.module('Qbank')
.controller('ShowQaCtrl', function($firebaseObject, firebaseService, $stateParams, $location, Flash){
  var showQaCtrl = this;
  showQaCtrl.correct = false;
  showQaCtrl.submitText = "Submit"
  showQaCtrl.subjectId = $stateParams.subjectId;
  console.log(showQaCtrl.subjectId);

  showQaCtrl.currentUser = function() {
    return firebaseService.currentUser;
  }

  showQaCtrl.subjectName = function() {
    if($stateParams.subjectId == 1) {
      return "Maths";
    } else if ($stateParams.subjectId == 2) {
      return "Science";
    } else if ($stateParams.subjectId == 3) {
      return "Social";
    }
  }

  showQaCtrl.users = firebaseService.users;

  showQaCtrl.userBookmarks = firebaseService.userBookmarks;

  showQaCtrl.questions = function() {
    var questions = [];
    angular.forEach(firebaseService.questions, function(question){
      if(question.subjectCategory == showQaCtrl.subjectId) {
        questions.push(question);
      }
    });
    return questions;
  }

  showQaCtrl.check = function(obj) {
    showQaCtrl.optionValue = obj.target.attributes.data.value;
  }

  showQaCtrl.addScore = function() {
    angular.forEach(showQaCtrl.users, function(user) {
      if (showQaCtrl.currentUser().uid == user.uid) {
        user.score += 1;
        showQaCtrl.users.$save(user);
      }
    })
  };

  showQaCtrl.correctAnswer = function(qa) {
    var answer = qa.correctOption;
    if (answer == 1) {
      return qa.option1;
    } else if (answer == 2) {
      return qa.option2;
    } else if (answer == 3) {
      return qa.option3;
    }
  }

  showQaCtrl.submit = function(correctAnswer, qa) {
    qa.submitted = true;
    // showQaCtrl.addBorder = showQaCtrl.answerBorder(correctAnswer, qa);
    if (showQaCtrl.optionValue == correctAnswer) {
      qa.correct = true;
      showQaCtrl.addScore();
      qa.faIcon = "fa fa-check-circle-o";
    } else {
      qa.correct = false;
      qa.faIcon = "fa fa-times-circle-o";
      qa.showCorrectAnswer = showQaCtrl.correctAnswer(qa); 
    }
  }

  //User can bookmark a question
  showQaCtrl.saveQuestion = function(qa) {
    var currentUser = showQaCtrl.currentUser().uid;
    var barray = []
    var userObj = {};
    userObj.qaId = qa.$id;
    userObj.userId = currentUser;
    userObj.question = qa;
    showQaCtrl.userBookmarks.$add(userObj);
    var message = "Bookmarked";
    Flash.create('success', message);
  }

  showQaCtrl.isAdmin = function(role) {
    return firebaseService.queryUser(role);
  }

  showQaCtrl.deleteQuestion = function(qa) {
    firebaseService.questions.$remove(qa);
    var message = "Deleted";
    Flash.create('danger', message);
  }

  

});