export default {
  apiUri: process.env.REACT_APP_API_URI || 'http://localhost:8080/graphql',
  auth0: {
    domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI || '',
    responseType: process.env.REACT_APP_AUTH0_RESPOSE_TYPE || '',
    scope: process.env.REACT_APP_AUTH0_SCOPE || '',
  },
};
