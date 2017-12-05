import logger from './logging';
import server from './server';

const port = process.env.COZY_PORT || 3000;

server.listen(port, () => {
  logger.info(`Started on port ${server.address().port}`);
});
