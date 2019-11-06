import { Request, Response } from 'express';

export const getEvents = (req: Request, res: Response): Response =>
  res.send({
    baseUrl: req.baseUrl,
    host: req.hostname,
    protocol: req.protocol,
    origin: req.originalUrl,
    route: req.route,
    path: req.path
  });
