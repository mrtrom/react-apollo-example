import React from 'react';
import { render } from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import CssBaseline from '@material-ui/core/CssBaseline';
import Pages from './pages';
import config from './config';

const cache = new InMemoryCache();
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: config.apiUri,
    headers: {
      // authorization: localStorage.getItem('token'),
      'client-name': 'react-apollo-example [web]',
      'client-version': '1.0.0',
    },
  }),
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
