import { Router } from 'express';

import { Route } from './types';

export const applyRoutes = (
  router: Router,
  routes: Array<Route>,
  scope?: string
): Router => {
  routes.forEach(({ handlers, method, path }) => {
    router[method](`${scope || ''}${path}`, ...handlers);
  });

  return router;
};
