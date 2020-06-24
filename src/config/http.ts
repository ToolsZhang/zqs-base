import { IConfig } from 'zqs-core/lib/http';

export const development: IConfig = {
  preListen: server => {
    // Do some stuff.
  },
};

export const production: IConfig = {
  preListen: server => {
    // Do some stuff.
  },
};
