var bx = angular.module("bx", ["LocalStorageModule", "xeditable", "ngAnimate"]);

bx.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('ngbx');
});

bx.run(function(editableOptions) {
  editableOptions.theme = 'default';
});

bx.controller("BookmarksCtrl", ["$scope", "localStorageService", function($scope, localStorageService){
  
  //Get the bookmarksData from Local Storage if there is some already in place
  $scope.getBookmarks = function (){
    if(localStorageService.get("bookmarksData")){
      $scope.bookmarks = localStorageService.get("bookmarksData");
    } else {
      $scope.bookmarks = [];
    }
  }
  
  $scope.addBookmark = function(){
    
  }
  
}]);