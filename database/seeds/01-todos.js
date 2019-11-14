
exports.seed = function(knex) {
  return knex('todos').truncate()
    .then(function () {
      return knex('todos').insert([
        {id: 1, text: 'rowValue1', order: 0},
        {id: 2, text: 'rowValue2', order: 1},
        {id: 3, text: 'rowValue3', order: 3},
        {id: 4, text: 'rowValue1', order: 2},
        {id: 5, text: 'rowValue2', order: 5},
        {id: 6, text: 'rowValue3', order: 4},
      ]);
    });
};
