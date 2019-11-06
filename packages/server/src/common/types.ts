import { RequestHandler } from 'express';

import { Crud } from './enums';

export type Route = {
  method: Crud;
  path: string;
  handlers: Array<RequestHandler>;
};
