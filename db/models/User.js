const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users' }
  get hasTimestamps() { return true }


//   messages() {
//     returns this.hasMany(Message);
//   }
// }


// class User extends bookshelf.Model {
//   get tableName() { return 'users' }
//   get hasTimestamps() { return true }  

//   gallery(){
//     // returns.hasMany(Gallery);
//     return this.belongsTo(User)
//   }
}

module.exports = User;