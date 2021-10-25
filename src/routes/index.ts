import { Router } from 'express';

import AppController from '../controllers/AppController';

const route = Router();

route.get('/', AppController.index);
route.get('/instalacoes', AppController.installations);
route.get('/quartos', AppController.rooms);
route.get('/quartos/:id', AppController.room);

export { route };
