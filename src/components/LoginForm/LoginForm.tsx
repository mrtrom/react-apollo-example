import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { AccountTypeCard, UserForm, AnonymLogin } from '..';
import auth from '../../Auth';

type LoginFormProps = {
  onSignUpClick?: () => void;
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

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alias, setAlias] = useState('');
  const [selectedLoginType, setSelectedLoginType] = useState('user');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = (event.target as HTMLInputElement).value;
    setEmail(newEmail);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = (event.target as HTMLInputElement).value;
    setPassword(newPassword);
  };

  const onChangeAlias = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAlias = (event.target as HTMLInputElement).value;
    setAlias(newAlias);
  };

  const onUserSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.login(email, password);
  };

  // const onAnonymSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   await auth.login(email, password);
  // };

  const onLoginTypeClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value: type } = event.currentTarget as HTMLButtonElement;
    setSelectedLoginType(type);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.choose}>
          Choose login type!
        </Typography>
        <Grid container className={classes['grid-container']} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <AccountTypeCard
                accountType="user"
                selectedLoginType={selectedLoginType}
                text="User!"
                handleClick={onLoginTypeClick}
              />
              <AccountTypeCard
                accountType="anonym"
                selectedLoginType={selectedLoginType}
                text="Anonymous!"
                handleClick={onLoginTypeClick}
              />
            </Grid>
          </Grid>
        </Grid>
        {selectedLoginType === 'user' ? (
          <UserForm
            handleEmail={onChangeEmail}
            handlePassword={onChangePassword}
            handleSubmit={onUserSubmit}
            isSignIn={true}
            onSignUpClick={props.onSignUpClick}
          />
        ) : (
          <AnonymLogin handleAlias={onChangeAlias} />
        )}
      </div>
    </Container>
  );
};

export default LoginForm;
