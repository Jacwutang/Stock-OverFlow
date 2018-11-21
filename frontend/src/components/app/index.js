import React, { Component } from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util.js';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import styles from './index.module.css';

import Layout from '../layout';
import Header from '../header';
import Footer from '../footer';
import AuthForm from '../auth_form';
import Home from '../home';


const App = () => (
  <div>
    <AuthRoute path="/login" component={AuthForm} />
    <AuthRoute path="/signup" component={AuthForm} />

    <Route exact path="/" component={Home} />
  </div>
);

export default App;
