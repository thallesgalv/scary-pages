import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Equipe from '../pages/Equipe';
import Objetivos from '../pages/Objetivos';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/objetivos" component={Objetivos} />
      <Route path="*/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
