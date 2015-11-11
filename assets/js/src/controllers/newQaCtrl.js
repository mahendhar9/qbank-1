angular.module('Qbank')
.controller('NewQaCtrl', function(firebaseService){
  var newQaCtrl = this;

  newQaCtrl.qaObj = {};

  newQaCtrl.submit = function() {
    var question = newQaCtrl.qaObj.question,
    option1 = newQaCtrl.qaObj.option1,
    option2 = newQaCtrl.qaObj.option2,
    option3 = newQaCtrl.qaObj.option3,
    correctOption = newQaCtrl.qaObj.correctOption,
    subjectCategory = newQaCtrl.qaObj.subjectCategory;
    firebaseService.create(question, option1, option2, option3, correctOption, subjectCategory);
    newQaCtrl.qaObj = {};
  }
  
});