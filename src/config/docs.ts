import { IConfig } from 'zqs-core/lib/docs';
import * as config from './environment';

export const development: IConfig = {
  path: '/api',
  options: {
    swagger: '1.0',
    info: {
      title: 'Restful API Documentation',
      description: 'by Zq.',
      version: '1.0.0',
      contact: {
        email: '2369185957@qq.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },

    host: `${config.development.domain}:${config.development.port}`,
    schemes: ['http'],
    basePath: '/',
    produces: ['application/json', 'application/xml'],
  },
};

export const production: IConfig = {
  path: '/api',
  options: {
    swagger: '1.0',
    info: {
      title: 'Restful API Documentation',
      description: 'by Zq.',
      version: '1.0.0',
      contact: {
        email: '2369185957@qq.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },

    host: `${config.production.domain}:${config.production.port}`,
    schemes: ['http'],
    basePath: '/',
    produces: ['application/json', 'application/xml'],
  },
};
