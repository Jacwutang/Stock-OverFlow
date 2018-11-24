import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/user" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  console.log( Boolean(state.auth.user) )
  return { loggedIn: Boolean(state.auth.user) };
}

// connect Auth to the redux store
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// connect Protected to the redux store
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
