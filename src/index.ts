import { Zqs } from 'zqs-core';
import { config } from './config';

try {
  Zqs.create(__dirname, config).start();
} catch (e) {
  console.error(e);
}
