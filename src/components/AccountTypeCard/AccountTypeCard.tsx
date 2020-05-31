import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  'account-option': {
    height: 150,
    width: 140,
  },
  active: {
    'background-color': 'green',
  },
}));

type AccountTypeProps = {
  accountType: string;
  selectedLoginType: string;
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const AccountTypeCard = (props: AccountTypeProps) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper
        className={`${classes['account-option']} ${
          props.selectedLoginType === props.accountType ? classes.active : ''
        }`}
      >
        <ButtonBase
          focusRipple
          key={props.accountType}
          style={{
            width: '100%',
            height: '100%',
          }}
          value={props.accountType}
          onClick={props.handleClick}
        >
          <span>{props.text}</span>
        </ButtonBase>
      </Paper>
    </Grid>
  );
};

export default AccountTypeCard;
