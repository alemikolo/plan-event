import express from 'express';

export enum Crud {
  get = 'get',
  post = 'post',
  patch = 'patch',
  delete = 'delete'
}

type Route = {
  method: Crud;
  path: string;
  handlers: Array<express.RequestHandler>;
};

export const applyRoutes = (router: express.Router) => (scope?: string) => (
  routes: Array<Route>
): express.Router => {
  routes.forEach(({ handlers, method, path }) => {
    router[method](`${scope ? `${scope}` : ''}${path}`, ...handlers);
  });

  return router;
};
