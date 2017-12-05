import { Router } from 'express';

import healthRouter from './health';

const apiRoutes = Router();

apiRoutes.use(healthRouter);

export default apiRoutes;
