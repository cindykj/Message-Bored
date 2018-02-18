angular.module('messageBored')
.service('TopicServices', ['$http', function ($http) {
  const topics = [];

  $http.get(`/api/topics`)
    .then(result => {
      let data = result.data;
      data.forEach((element) => {
        return topics.push(element);
      })
    })
    .catch(err => {
      console.log({err: err.message})
    })
    this.getTopics = function() {
      return topics;
    }

  // this.getTopics = function () {
  //   return $http.get('/api/topics')
  //   .then(result => {
  //     let data = result.data
  //     data.forEach((element) => {
  //       return topics.push(element);
  //     })
  //   })
  //   .then(topics => {
  //     console.log(topics)
  //     return topics
  //   })

  // }
}])