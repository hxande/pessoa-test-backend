const { Router } = require('express');
const PersonController = require('./src/controllers/PersonController');

const routes = Router();

routes.get('/people/:id', PersonController.find);
routes.get('/people', PersonController.list);
routes.post('/people', PersonController.create);
routes.delete('/people/:id', PersonController.delete);
routes.put('/people/:id', PersonController.update);

module.exports = routes;