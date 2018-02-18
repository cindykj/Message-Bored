const bookshelf = require('./bookshelf');

class Message extends bookshelf.Model {
  get tableName() { return 'messages' }
  get hasTimestamps() { return true }
  
  // class User extends bookshelf.Model {
    //   get tableName() { return 'users' }
    //   get hasTimestamps() { return true }  
    
    // author(){
    //   // returns.hasMany(Gallery);
    //   return this.belongsTo(User)
    // }
  }
  

module.exports = Message;