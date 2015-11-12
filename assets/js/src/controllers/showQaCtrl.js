angular.module('Qbank')
.controller('ShowQaCtrl', function($firebaseObject, firebaseService, $stateParams, $location){
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

    // angular.forEach(showQaCtrl.userBookmarks, function(bookmark){
    //   if (bookmark.userId == currentUser) {
    //     barray.push(bookmark);
    //   }
    // });
    // angular.forEach(barray, function(singleBookmark){
    //   if (indexOf(singleBookmark.)) {
    //     barray.push(bookmark);
    //   }
    // });
    showQaCtrl.userBookmarks.$add(userObj);

  }

});