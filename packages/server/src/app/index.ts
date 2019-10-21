import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

import eventRouter from '../services/event/router';

const initApp = (app: express.Application): express.Application => {
  app.use(cors({ credentials: true, origin: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(eventRouter);
  app.use('*', (_, res) => res.sendFile(path.resolve('public/index.html')));

  return app;
};

export default initApp(express());
