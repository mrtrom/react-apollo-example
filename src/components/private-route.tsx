import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { IS_LOGGED_IN } from '../graphql/queries/user';

type PrivateRouteProps = {
  component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
};

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <Route
      {...rest}
      render={(props) => (data && data.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
