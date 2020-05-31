import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Auth0Callback from './auth-callback';
import Login from './login';
import Chat from './chat';
import { PublicRoute, PrivateRoute } from '../components';

export default function Pages() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <PublicRoute restricted={false} component={Home} path="/" exact /> */}
          <PublicRoute restricted={true} component={Login} path="/" exact />
          <PublicRoute restricted={true} component={Auth0Callback} path="/callback" exact />
          <PrivateRoute component={Chat} path="/chat" exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}
