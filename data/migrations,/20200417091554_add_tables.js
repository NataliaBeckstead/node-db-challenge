
exports.up = function(knex) {
    return(
        knex.schema
            .createTable('projects', tbl => {
                tbl.increments('id');
                tbl.string('name').notNullable().unique().index();
                tbl.text('description');
                tbl.boolean('completed').notNullable().defaultTo(false);
            })

            .createTable('resources', tbl => {
                tbl.increments('id');
                tbl.string('name').notNullable().unique().index();
                tbl.text('description');
            })

            .createTable('tasks', tbl => {
                tbl.increments('id');
                tbl.text('description').notNullable();
                tbl.text('notes');
                tbl.boolean('completed').notNullable().defaultTo(false);
    
                tbl.integer('project_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('projects')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
            })

            .createTable('projects_resources', tbl => {
                tbl.increments('id');
    
                tbl.integer('project_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('projects')
                    .onDelete('RESTRICT')
                    .onUpdate('CASCADE');
    
                tbl.integer('resource_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('resources')
                    .onDelete('RESTRICT')
                    .onUpdate('CASCADE');
    
                tbl.unique(['project_id', 'resource_id']);
            })

    )
};

exports.down = function(knex) {
  
};
