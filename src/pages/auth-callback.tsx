import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from 'react-router-dom';
import { parseJwt } from '../utils';

type Auth0CallbackProps = RouteComponentProps & {};

const Auth0Callback: React.FC<Auth0CallbackProps> = (props) => {
  const client: ApolloClient<object> = useApolloClient();

  const hash = props.location && props.location.hash;
  const hashArr = hash && hash.split('&');
  const encodedToken = hashArr && hashArr[hashArr.length - 1].replace('id_token=', '');
  const decodedUser = parseJwt(encodedToken);

  localStorage.setItem('email', decodedUser.email as string);
  client.writeData({ data: { isLoggedIn: true } });

  return (
    <Container component="main" maxWidth="xs">
      <p>Yes!</p>
    </Container>
  );
};

export default Auth0Callback;
