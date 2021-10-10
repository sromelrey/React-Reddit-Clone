import React from 'react';
import { authLayoutStyle } from './Styles';
const AuthLayout = (props) => {
  const { children } = props;

  const {
    props: { location },
  } = children;

  const classes = authLayoutStyle();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.contentBody}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
