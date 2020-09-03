
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Create a garden', description: 'can wait untill retirement', completed: false},
        {id: 2, name: "Don't get sick", description: "can't be finished untill discovery of vaccine", completed: false},
        {id: 3, name: 'Get job', completed: false}
      ]);
    });
};
