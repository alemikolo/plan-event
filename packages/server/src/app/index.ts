import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

import eventRouter from '@modules/event/routes';

const initApp = (app: Application): Application => {
  app.use(cors({ credentials: true, origin: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(eventRouter);
  app.use('*', (_, res) => res.sendFile(path.resolve('public/index.html')));

  return app;
};

export default initApp(express());
