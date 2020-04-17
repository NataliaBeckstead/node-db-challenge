const db = require('../data/db-config');

module.exports = {
    getProjects,
    getTasks,
    getResources
};

function getProjects() {
    return db("projects");
}

function getResources(id) {
	return db("projects_resources")
        .join("projects", "projects.id", "projects_resources.project_id")
        .join("resources", "resources.id", "projects_resources.resource_id")
		.select("projects.name", "resources.name", "resources.description")
		.where({ id });
}

function getTasks(id) {
	return db("tasks").where({ id });
}