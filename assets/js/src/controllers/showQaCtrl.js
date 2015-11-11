angular.module('Qbank')
.controller('ShowQaCtrl', function(firebaseService, $stateParams){
  var showQaCtrl = this;
  showQaCtrl.correct = false;
  showQaCtrl.submitText = "Submit"
  showQaCtrl.subjectId = $stateParams.subjectId;
  console.log(showQaCtrl.subjectId);

  showQaCtrl.questions = function() {
    var questions = [];
    angular.forEach(firebaseService.questions, function(question){
      if(question.subjectCategory == showQaCtrl.subjectId) {
        questions.push(question);
      }
    });
    return questions;
  }

  showQaCtrl.check = function(obj, id) {
    showQaCtrl.optionValue = obj.target.attributes.data.value;
    console.log(showQaCtrl.optionValue);
  }

  showQaCtrl.submit = function(correctAnswer, qa) {
    qa.submitted = true;
    showQaCtrl.addBorder = showQaCtrl.answerBorder(correctAnswer, qa);
    if (showQaCtrl.optionValue == correctAnswer) {
      showQaCtrl.submitText = "Correct";
      qa.correct = true;
      qa.faIcon = "fa fa-check-circle-o";
    } else {
      showQaCtrl.submitText = "Wrong";
      qa.correct = false;
      qa.faIcon = "fa fa-times-circle-o";
    }
  }

  showQaCtrl.answerBorder = function(correctAnswer, qa) {
    console.log("Inside " + correctAnswer)
    if (correctAnswer == qa.correctOption) {
      return true;
    } else {
      return false;
    }
  }

});