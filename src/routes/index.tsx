import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Equipe from '../pages/Equipe';
import Objetivos from '../pages/Objetivos';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/objetivo" component={Objetivos} />
    </Switch>
  );
};

export default Routes;
