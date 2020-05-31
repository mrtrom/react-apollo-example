import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as LoginTypes from '../../pages/types/user';
import { UserForm } from '..';
import auth from '../../Auth';

type SignUpFormProps = {
  signup: (a: { variables: LoginTypes.signupVariables }) => void;
  onSignUpClick: () => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  'grid-container': {
    flexGrow: 1,
    'margin-top': '20px',
  },
  choose: {
    color: '#3f7fb5',
    'font-weight': 'bold',
    'font-size': '22px',
  },
}));

const SignUpForm = (props: SignUpFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = (event.target as HTMLInputElement).value;
    setEmail(newEmail);
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = (event.target as HTMLInputElement).value;
    setUsername(newUsername);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = (event.target as HTMLInputElement).value;
    setPassword(newPassword);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.signup(email, username, password);
      await props.signup({ variables: { email, username } });
    } catch (e) {
      console.error('There was an error trying to sign up', e);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.choose}>
          Sign up!
        </Typography>
        <UserForm
          handleEmail={onChangeEmail}
          handleUsername={onChangeUsername}
          handlePassword={onChangePassword}
          handleSubmit={onSubmit}
          isSignIn={false}
          onSignUpClick={props.onSignUpClick}
        />
      </div>
    </Container>
  );
};

export default SignUpForm;
