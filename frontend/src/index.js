import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import configureStore from './store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/app';




document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.getState = store.getState;

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>

    </Provider>,
    document.getElementById('root'));

})
