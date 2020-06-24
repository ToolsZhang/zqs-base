import { IConfig } from 'zqs-core/lib/statics';
import * as environment from './environment';

export const development: IConfig[] = [
  {
    endpoint: '/static',
    path: environment.development.root + '/static',
  },
];

export const production: IConfig[] = [
  {
    endpoint: '/static',
    path: environment.production.root + '/static',
  },
];
