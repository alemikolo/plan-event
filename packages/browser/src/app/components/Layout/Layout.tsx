/* eslint-disable no-console */
import React, { FC } from 'react';

import classes from './Layout.scss';

const getEvents = (): void => {
  fetch('/api/event/get', { method: 'GET' })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

const Layout: FC = () => (
  <div className={classes.layout}>
    <h1>Plan Event App</h1>
    <button type="button" onClick={getEvents}>
      server test
    </button>
  </div>
);

export default Layout;
