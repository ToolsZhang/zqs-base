import { IConfig } from 'zqs-core';
import * as authEnv from './auth';
import * as corsEnv from './cors';
import * as docsEnv from './docs';
import * as environment from './environment';
import * as httpEnv from './http';
import * as mongodbEnv from './mongodb';
import * as spdyEnv from './spdy';
import * as staticsEnv from './statics';

const env = environment[process.env.NODE_ENV];

export const config: IConfig = {
  root: env.root,
  port: env.port,
  ip: env.ip,
  domain: env.domain,
  mongodb: mongodbEnv[process.env.NODE_ENV],
  docs: docsEnv[process.env.NODE_ENV],
  auth: authEnv[process.env.NODE_ENV],
  statics: staticsEnv[process.env.NODE_ENV],
  http: httpEnv[process.env.NODE_ENV],
  cors: corsEnv[process.env.NODE_ENV],
  spdy: spdyEnv[process.env.NODE_ENV],
};
