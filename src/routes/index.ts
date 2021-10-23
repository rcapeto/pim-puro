import { Router } from 'express';

import AppController from '../controllers/AppController';

const route = Router();

route.get('/', AppController.index);

export { route };
