angular.module(`messageBored`)
.controller(`HomeController`, [`$scope`, `TopicServices`, function ($scope, TopicServices){
  $scope.topics = TopicServices.getTopics();
  // TopicServices.getTopics().then(result => { //can do it this way
  //   $scope.topics = result;
  // })

  
}]);
