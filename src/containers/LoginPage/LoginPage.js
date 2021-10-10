import React from 'react';
import { useSelector } from 'react-redux';

import { loginStyles } from './Styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Button, TextField, Typography } from '@material-ui/core';

const LoginPage = (props) => {
  const classes = loginStyles();
  const { email, password } = useSelector(({ LoginPageReducer }) => LoginPageReducer);

  const onFieldChange = (e, data) => {
    props.onFieldChange(e.target.name, e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.login({ email, password });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <Typography className={classes.title} variant="h4">
          Sign In
        </Typography>
        <TextField
          label="email"
          fullWidth
          name="email"
          type="email"
          variant="outlined"
          className={classes.textField}
          value={email}
          onChange={onFieldChange}
        />
        <TextField
          label="password"
          fullWidth
          name="password"
          type="password"
          variant="outlined"
          className={classes.textField}
          value={password}
          onChange={onFieldChange}
        />
        <Button className={classes.signInButton} fullWidth size="large" type="submit" variant="contained">
          Sign In
        </Button>
        <Typography className={classes.accountSignUp} align="center" color="textSecondary" variant="body1">
          If you do not have an account
          <Link className={classes.account} component={RouterLink} to="/sign-up" variant="h6" style={{ marginLeft: 10 }}>
            Click here
          </Link>
        </Typography>
        <Typography align="center" color="textSecondary" variant="body1">
          <Link className={classes.forgetPassword} component={RouterLink} to="/forgotPassword" variant="h6">
            Did you forget your password?
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default LoginPage;
