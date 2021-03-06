angular.module('messageBored')
  .service('UserService', ['$http', function ($http) {
    const users = [];
    //promise
    $http.get('/api/users')
      .then(result => {
        let data = result.data;
        data.forEach((element) => {
          return users.push(element);
        })
      })
      .catch(err => {
        console.log({err: err.message})
      })
      this.getUsers = function () {
          // console.log('getting all users');
        return users;
        }
      
    this.addUser = function (user) {
      return $http.post('/api/users', user)
      .then(user => {
        return users.push(user.data);
        })
    }
  }]);

// Original code //this allows to fetch this method and fire again
//   this.fetchUsers = function () {
//     return $http.get('/api/users')
//       .then(result => {
//         result.data.forEach((element) => {
//           return users.push(element)
//         })
//       })
//   }
//   this.getUsers = function () {
//     return users
//   }