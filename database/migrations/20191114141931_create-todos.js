
exports.up = function(knex) {
  return knex.schema.createTable('todos', table => {
    table.increments()
    table.string('text', 256)
      .notNullable();
    table.integer('order')
      .notNullable()
      .unique();
    table.boolean('done')
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos');
};
