import { Request, Response } from 'express';

export const getEvents = (req: Request, res: Response): Response => {
  // eslint-disable-next-line no-console
  console.log('get getEvents controller', req);

  return res.send({
    event1: 'granko',
    event2: 'wycieczka',
    event3: 'konferencja'
  });
};
