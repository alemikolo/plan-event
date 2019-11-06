import { Router } from 'express';

import { applyRoutes } from '@common/helpers';
import { Crud } from '@common/enums';
import { getEvents } from './controllers';

export default applyRoutes(Router())('/api/event')([
  { method: Crud.get, path: '/get', handlers: [getEvents] }
]);
