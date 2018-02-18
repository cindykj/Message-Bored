angular.module(`messageBored`)
.controller(`MessagesController`, [`$scope`, `MessagesService`, function ($scope, MessagesService){
  $scope.messages = MessagesService.getLatest();
}])