import { normalize } from 'path';

export const development = {
  root: normalize(__dirname + '/../..'),
  port: 9000,
  ip: '0.0.0.0',
  domain: 'localhost',
};

export const production = {
  root: normalize(__dirname + '/../..'),
  port: process.env.PORT || 8080,
  ip: process.env.IP || '0.0.0.0',
  domain: process.env.DOMAIN || 'localhost',
};
