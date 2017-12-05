import { Router } from 'express';

import apiRoutes from './api';
import middleware from '../middleware';

const routes = Router();

routes.use(middleware);

routes.use('/api', apiRoutes);

export default routes;
