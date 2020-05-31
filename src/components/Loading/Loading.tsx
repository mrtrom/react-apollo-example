import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  loading: {
    display: 'block',
    margin: 'auto',
    fill: 'gray',
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.complex,
    }),
    transform: 'rotate(360deg)',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return <Logo className={classes.loading} />;
}
