import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import Pages from './pages';
import config from './config';

const wsLink = new WebSocketLink({
  uri: config.apiWsUri,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: config.apiHttpUri,
  headers: {
    // authorization: localStorage.getItem('token'),
    'client-name': 'react-apollo-example [web]',
    'client-version': '1.0.0',
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

const initData = {
  isLoggedIn: !!localStorage.getItem('email'),
};
cache.writeData({ data: initData });

render(
  <ApolloProvider client={client}>
    <CssBaseline />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
