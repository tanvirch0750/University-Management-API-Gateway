import { createClient } from 'redis';
import { logger } from './logger';

let redisClient = createClient({
  url: `redis://localhost:6379`,
});

redisClient.on('error', err => logger.error('Radis Error', err));
redisClient.on('connect', () => logger.info('Radis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect,
};
