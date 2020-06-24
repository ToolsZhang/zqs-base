import { IConfig } from 'zqs-core/lib/spdy';
import { readFileSync } from 'fs';
import * as environment from './environment';

export const development: IConfig = {
  options: {
    key: readFileSync(
      environment.development.root + '/rsa/spdy/dev/privatekey.pem'
    ),
    cert: readFileSync(
      environment.development.root + '/rsa/spdy/dev/certificate.pem'
    ),
  },
  port: 8443,
};

export const production: IConfig = {
  options: {
    key: '',
    cert: '',
  },
  port: 433,
};
