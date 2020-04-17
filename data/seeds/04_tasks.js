
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: "Buy seeds", completed: false},
        {id: 2, project_id: 1, description: "Plant them", completed: false},
        {id: 3, project_id: 1, description: "Take care of plants", completed: false},
        {id: 4, project_id: 1, description: "Enjoy beauty of the flowers", notes: "Roses Are Red, Violets Are Blue", completed: false},
        {id: 5, project_id: 2, description: "Avoid public places", completed: false},
        {id: 6, project_id: 2, description: "Wash hands", notes: "30 seconds", completed: false},
        {id: 7, project_id: 2, description: "Don't touch your face", completed: false},
        {id: 8, project_id: 2, description: "Wear masks", notes: "change every 3-4 hours or then become wet", completed: false},
        {id: 9, project_id: 2, description: "Repeat untill the end of pandemic", completed: false},
        {id: 10, project_id: 3, description: "finish Lambda School", completed: false},
        {id: 11, project_id: 3, description: "Prepare for interviews", notes: "technical + soft skills", completed: false},
        {id: 12, project_id: 3, description: "Apply for jobs", completed: false}
      ]);
    });
};
