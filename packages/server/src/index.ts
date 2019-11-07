import http from 'http';
import 'module-alias/register';

import app from './app';
import connectDB from './database';

const { PORT = 8080 } = process.env;
const server = http.createServer(app);

connectDB();

server.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.info(`Plan Event server is running on port ${PORT}`)
);
