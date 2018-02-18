angular.module('messageBored', ['ngRoute'])

angular.module('messageBored')
.config(function ($routeProvider, $locationProvider){
  //MoviesProvider.setEndpoint('http://localhost:8080/api/movies'); //MoviesProvider

    $routeProvider.when(`/`, {
      controller: `HomeController`,
      templateUrl: `/views/home.html`
    })
    .when(`/users`, {
      controller: 'UserController',
      templateUrl: '/views/users.html'
    })
    .when(`/messages/latest`, {
      controller: 'MessagesController',
      templateUrl: '/views/latest.html'
    })

    $locationProvider.html5Mode(true); //where is user based on browser url; html5 does not require '#'
});
