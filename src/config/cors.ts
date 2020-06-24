import { IConfig } from 'zqs-core/lib/cors';

export const development: IConfig = {
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

export const production: IConfig = {
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};
