var bx = angular.module("bx", ["LocalStorageModule", "xeditable", "ngAnimate"]);

bx.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('ngbx');
});

bx.run(function(editableOptions) {
  editableOptions.theme = 'default';
});

bx.controller("BookmarksCtrl", ["$scope", "localStorageService", function($scope, localStorageService){
  
  $scope.bookmarks = [];
  
  //Get the bookmarksData from Local Storage if there is some already in place
  $scope.getBookmarks = function (){
    if(localStorageService.get("bookmarkData")){
      $scope.bookmarks = localStorageService.get("bookmarkData");
    } else {
      $scope.bookmarks = [];
    }
  }
  
  $scope.addBookmark = function(){
    $scope.bookmarks.unshift({
      title: $scope.title,
      url: $scope.url,
      category: $scope.category
    });
    localStorageService.set("bookmarkData", $scope.bookmarks);
    $scope.title = "",
    $scope.url = "",
    $scope.category = "";
  }
  
  $scope.removeBookmark = function(start){
    var confirmDelete = confirm("Are you sure you want to delete this bookmark?");
    if (confirmDelete) {
      $scope.bookmarks.splice(start, 1);
      localStorageService.set("bookmarkData", $scope.bookmarks);
    }
    localStorageService.set("bookmarkData", $scope.bookmarks);
  }
  
  $scope.updateTitle = function(){
    localStorageService.set("todoData", $scope.title);
  }
  
  $scope.updateUrl = function(){
    localStorageService.set("todoData", $scope.url);
  }
  
  $scope.updateCategory = function(){
    localStorageService.set("todoData", $scope.category);
  }
  
}]);