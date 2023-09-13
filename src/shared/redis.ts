import { createClient } from 'redis';
import config from '../config';
import { logger } from './logger';

let redisClient = createClient({
  url: config.redis.redis_url,
});

redisClient.on('error', err => logger.error('Radis Error', err));
redisClient.on('connect', () => logger.info('Radis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect,
};
