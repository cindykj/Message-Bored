const bookshelf = require('./bookshelf');

class Topic extends bookshelf.Model {
  get tableName() { return 'topics' }
  get hasTimestamps() { return true }

    author(){
      return this.hasMany(Topic);
    }

    message(){
      return this.hasMany(Message);
    }
}


// class User extends bookshelf.Model {
//   get tableName() { return 'users' }
//   get hasTimestamps() { return true }  

//   gallery(){
//     // returns hasMany(Gallery);
//     return this.belongsTo(User)
//   }
// }

module.exports = Topic;