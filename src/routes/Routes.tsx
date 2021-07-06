import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Error404 } from '../components/Error404/Error404';
import { HomePage } from '../components/Home/HomePage';
import { Weather } from '../components/Weather/Weather';

export const Path = {
  WeatherInCA: '/weather/CA',
  WeatherInTX: '/weather/TX',
  HOME: '/'
};

export const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={Path.HOME} component={() => <HomePage/>}/>
        <Route exact path={Path.WeatherInCA} component={() => <Weather stateName={'CA'}/>}/>
        <Route exact path={Path.WeatherInTX} component={() => <Weather stateName={'TX'}/>}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
};