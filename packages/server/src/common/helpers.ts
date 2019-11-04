import { Router } from 'express';

import { Route } from './types';

export const applyRoutes = (router: Router) => (scope?: string) => (
  routes: Array<Route>
): Router => {
  routes.forEach(({ handlers, method, path }) => {
    router[method](`${scope ? `${scope}` : ''}${path}`, ...handlers);
  });

  return router;
};
