import React from 'react';
import TextField from '@material-ui/core/TextField';
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
  handleAlias: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserLogin = (props: AccountTypeProps) => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="alias"
        label="Alias"
        name="alias"
        autoFocus
        onChange={props.handleAlias}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Join!
      </Button>
    </form>
  );
};

export default UserLogin;
