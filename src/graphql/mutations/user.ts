import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation Login($email: String!) {
    loginToken(email: $email)
  }
`;

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $username: String!) {
    createUser(email: $email, username: $username) {
      username
      id
    }
  }
`;
