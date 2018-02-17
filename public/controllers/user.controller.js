angular.module(`messageBored`)
.controller(`UserController`, [`$scope`, `UserService`, function ($scope, UserService){
    $scope.users = UserService.getUsers();
    // UserService.fetchUsers(); //whyy??
    $scope.newUser = { name: '' };
    $scope.addUser = function() {
        let user = Object.assign({}, $scope.newUser);
        UserService.addUser(user);

        //clear inputs in field
        $scope.newUser.name = ''
    }
  
}])







/*
angular.module('myApp')
.controller('BooksController', 
  ['$scope', 'BookService', function ($scope, BookService) {
  
     //Books    
     $scope.books = BookService.getBooks();// this ends up replacing the array, but should be pushing into it
     $scope.newBook = { //declares new book, points to object
         title: '',
         author: ''
     };
     $scope.addBook = function () { // running function that runs a function; also called addBook, but calls Bookservice and passes in newBook
         let book = Object.assign({}, $scope.newBook); //brandons method
         BookService.addBook(book);
 
         //clear inputs in html field
         $scope.newBook.title = '';
         $scope.newBook.author = '';
     }

}]);

*/