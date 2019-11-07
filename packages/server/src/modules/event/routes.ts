import { Router } from 'express';

import { applyRoutes } from '@common/helpers';
import { Crud } from '@common/enums';
import { getEvents } from './controllers';

export default applyRoutes(
  Router(),
  [{ method: Crud.GET, path: '/get', handlers: [getEvents] }],
  '/api/event'
);
