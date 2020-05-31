import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { IS_LOGGED_IN } from '../graphql/queries/user';

type PublicRouteProps = {
  component: React.FC<RouteComponentProps>;
  restricted: boolean;
  path: string;
  exact?: boolean;
};

const PublicRoute = ({ component: Component, restricted, ...rest }: PublicRouteProps) => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <Route
      {...rest}
      render={(props) =>
        data && data.isLoggedIn && restricted ? <Redirect to="/chat" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
