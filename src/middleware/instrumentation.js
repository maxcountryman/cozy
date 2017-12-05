import logger from '../logging';

const NS_PER_SECOND = 1e9;

const formatTiming = ([seconds, nanoSeconds]) =>
  (seconds * NS_PER_SECOND) + nanoSeconds;

export default (req, res, next) => {
  const startTime = process.hrtime();

  res.on('finish', () => {
    const endTime = process.hrtime(startTime);
    logger.info(`end time ${formatTiming(endTime)}ns`);
  });

  next();
};
