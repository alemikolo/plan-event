import { Request, Response } from 'express';

export const getEvents = (req: Request, res: Response): Response =>
  res.send({
    event1: 'event1',
    event2: 'event2',
    event3: 'event3'
  });
