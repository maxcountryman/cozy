import Router from 'express';

import controllers from '../../controllers';

const healthRoutes = Router();

healthRoutes.get('/health', controllers.api.health);

export default healthRoutes;
