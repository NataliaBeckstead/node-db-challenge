const express = require('express');

//const resourcesRouter = require('../resources/resources-router.js');
const projectsRouter = require('../projects/projects-router.js');

const server = express();


server.use(express.json());

server.use('/api/projects', projectsRouter);
//server.use('/api/resources', resourcesRouter);

module.exports = server;