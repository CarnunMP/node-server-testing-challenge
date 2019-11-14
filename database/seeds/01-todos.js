
exports.seed = function(knex) {
  return knex('todos').truncate()
    .then(function () {
      return knex('todos').insert([
        {id: 1, text: 'tidy room'},
        {id: 2, text: 'cook dinner'},
        {id: 3, text: 'email friend'},
        {id: 4, text: 'finid project'},
        {id: 5, text: 'meditate'},
        {id: 6, text: 'pick up little bro'},
      ]);
    });
};
