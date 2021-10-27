import { Router } from 'express';

import AppController from '../controllers/AppController';
import RoomController from '../controllers/RoomController';
import InstallationController from '../controllers/InstallationController';

const route = Router();

route.get('/', AppController.index);
route.get('/instalacoes', InstallationController.index);
route.get('/quartos', RoomController.index);
route.get('/quartos/:id', RoomController.getRoom);
route.get('/contato', AppController.contact);

route.post('/reserva', AppController.reservation);
route.post('/mensagem', AppController.sendMessage);

export { route };
