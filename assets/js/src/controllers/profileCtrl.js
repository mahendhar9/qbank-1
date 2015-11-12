angular.module('Qbank')
.controller('ProfileCtrl', function(firebaseService, $stateParams){
  var profileCtrl = this;

  profileCtrl.userBookmarks = firebaseService.userBookmarks;

  profileCtrl.currentUser = function() {
    return firebaseService.currentUser;
  }

  profileCtrl.showBookmarks = function() {
    var bookmarks = [];
    angular.forEach(profileCtrl.userBookmarks, function(bookmark) {
      if (bookmark.userId == profileCtrl.currentUser().uid) {
        bookmarks.push(bookmark.question);
      }
    });
    console.log(bookmarks);
    return bookmarks;
  }

  profileCtrl.correctAnswer = function(bookmark) {
    var answer = bookmark.correctOption;
    if (answer == 1) {
      return bookmark.option1;
    } else if (answer == 2) {
      return bookmark.option2;
    } else if (answer == 3) {
      return bookmark.option3;
    }
  }


});