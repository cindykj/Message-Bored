
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', table => {
    table.increments();
    table.string('name', 50).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('user_id').references('id').inTable('users');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')  
};
