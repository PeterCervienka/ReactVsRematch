import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { default as ApplicationLayout } from '../containers/application';
import { default as IndexLayout } from '../containers';

export default (
  <Route path="/" component={ApplicationLayout}>
    <IndexRoute component={IndexLayout} />

    <Route path="/" component={IndexLayout} />
  </Route>
);
