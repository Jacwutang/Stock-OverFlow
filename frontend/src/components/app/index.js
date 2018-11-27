import React, { Component } from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util.js';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import styles from './index.module.css';


import AuthForm from '../auth_form';
import Home from '../home';
import User from '../user';


const App = () => (
  <div>
    <AuthRoute path="/login" component={AuthForm} />
    <AuthRoute path="/signup" component={AuthForm} />

    <Route exact path="/" component={Home} />

    <Route path="/user" component={User} />

  </div>
);

export default App;



// <ProtectedRoute path="/user" component={User} />
