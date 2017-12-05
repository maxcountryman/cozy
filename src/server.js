import http from 'http';

import express from 'express';

import routes from './routes';

const requestListener = express();

// Register routes.
requestListener.use(routes);

export default http.createServer(requestListener);
