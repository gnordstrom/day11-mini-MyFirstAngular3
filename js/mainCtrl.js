angular.module('friendsList').controller('mainCtrl', function($scope){

  $scope.friendGroup = ["Adam", "Bob", "Carl", "Dave"];

  $scope.addFriend = function addFriend(name){
    $scope.friendGroup.push(name);
  };
});
