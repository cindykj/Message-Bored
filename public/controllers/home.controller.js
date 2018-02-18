angular.module(`messageBored`)
.controller(`HomeController`, [`$scope`, `TopicServices`, function ($scope, TopicServices){
  $scope.topics = TopicServices.getTopics();
  // TopicServices.getTopics().then(result => {
  //   $scope.topics = result;
  // })

  
}]);
