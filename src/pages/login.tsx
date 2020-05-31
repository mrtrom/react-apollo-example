import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { RouteComponentProps } from 'react-router-dom';
import { LoginForm, SignUpForm, Loading } from '../components';
import * as LoginTypes from './types/user';

import { SIGNUP_USER } from '../graphql/mutations/user';

type LoginProps = RouteComponentProps & {};

export default function Login(props: LoginProps) {
  const [isLogin, setIsLogin] = useState(true);

  const [signup, { error: errorSignup, loading: loadingSignup }] = useMutation<
    LoginTypes.signup,
    LoginTypes.signupVariables
  >(SIGNUP_USER, {
    onCompleted({ createUser: user }) {
      alert(`welcome ${user.username}!`);
    },
  });

  if (loadingSignup) return <Loading />;
  if (errorSignup) return <p>An error occurred on signup</p>;

  return isLogin ? (
    <LoginForm onSignUpClick={() => setIsLogin(false)} />
  ) : (
    <SignUpForm signup={signup} onSignUpClick={() => setIsLogin(true)} />
  );
}
