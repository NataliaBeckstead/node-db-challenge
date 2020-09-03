
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'seeds'},
        {id: 2, name: 'land'},
        {id: 3, name: 'water'},
        {id: 4, name: 'sun'},
        {id: 5, name: 'place to hide'},
        {id: 6, name: 'soap'},
        {id: 7, name: 'mask'},
        {id: 8, name: 'laptop'},
        {id: 9, name: 'internet'},
        {id: 10, name: 'cellphone'}
      ]);
    });
};
