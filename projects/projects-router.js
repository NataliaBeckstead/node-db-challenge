const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(project => {
            res.json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasks(id)
        .then(task => {
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Could not find tasks with given id.' })
        }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.getResources(id)
        .then(resources => {
        if (resources.length) {
            res.json(resources);
        } else {
            res.status(404).json({ message: 'Could not find resources for given project' })
        }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

module.exports = router;