import { IConfig } from 'zqs-core/lib/mongodb';

export const development: IConfig = {
  uri: 'mongodb://localhost/sample',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  promise: global.Promise,
};

export const production: IConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost/sample',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  promise: global.Promise,
};
