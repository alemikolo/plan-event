import http from 'http';

import app from './app';

const { PORT = 8080 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Plan Event server is running on port ${PORT}`)
);
