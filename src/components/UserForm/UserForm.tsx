import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type AccountTypeProps = {
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUsername?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onSignUpClick?: () => void;
  isSignIn: boolean;
};

const UserForm = (props: AccountTypeProps) => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={props.handleEmail}
      />
      {!props.isSignIn ? (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={props.handleUsername}
        />
      ) : (
        ''
      )}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={props.handlePassword}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {props.isSignIn ? 'Log in' : 'Sign up'}
      </Button>
      <Grid container>
        <Grid item xs>
          {props.isSignIn ? (
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          ) : (
            ''
          )}
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" onClick={props.onSignUpClick}>
            {props.isSignIn
              ? "Don't have an account? Sign Up!"
              : 'Already have an account? Sign In!'}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
