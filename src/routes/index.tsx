import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SoftSkills from '../pages/SoftSkills';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/rocketinvasion" component={SoftSkills} />
  </Switch>
);

export default Routes;
