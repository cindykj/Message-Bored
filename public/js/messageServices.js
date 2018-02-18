angular.module(`messageBored`)
.service(`MessagesService`, [`$http`, function($http) {
  const messages = [];

  $http.get(`/api/messages/latest`)
  .then(result => {
    let data = result.data;
    console.log(data)
    data.forEach((element) => {
      return messages.push(element);
    })
  })
  .catch(err => {
    console.log({err: err.message})
  })
  this.getLatest = function() {
    return messages;
  }
}])