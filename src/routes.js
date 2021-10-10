import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import AuthHelper from './helpers/auth';
import AuthLayout from './layouts/auth_layout/AuthLayout';
import LoginPage from './containers/LoginPage';

const routes = [
  { path: '/', exact: true, isPrivate: false, Layout: AuthLayout, Component: LoginPage },
  // { path: '/', exact: true, isPrivate: true, Component: Projects },
];

// TODO: Will configure this
// const getRedirectedPath = (location) => {
// 	if (location.pathname.split('?')[0] === '/' && location.pathname.split('?').length > 1) {
// 		return location.pathname + location.search + location.hash;
// 	}

// 	// skip the redirection from these routes
// 	if (['/'].indexOf(location.pathname.split('?')[0]) !== -1) {
// 		return '/signin';
// 	}
// 	return `/signin?path=${location.pathname + location.search + location.hash}`;
// };
const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthHelper.isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        // redirect to base path if not authenticated
        <Redirect
          to={{
            // pathname: getRedirectedPath(props.location),
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const Routes = (props) => {
  const { location } = props;

  return (
    <Switch location={location}>
      {routes.map(({ path, exact, isPrivate, Layout, Component }, key) => {
        if (isPrivate) {
          return <PrivateRoute key={0} path={path} exact={exact} layout={Layout} component={Component} location={location} />;
        } else {
          return (
            <Route
              key={key}
              path={path}
              exact={exact}
              render={(props) => (
                <Layout>
                  <Component {...props} />
                </Layout>
              )}
            />
          );
        }
      })}
    </Switch>
  );
};

export default withRouter(Routes);
