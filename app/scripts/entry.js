import React from 'react';
import ReactDOM from 'react-dom';
import settings from './settings';
import {Router, Route, Link, hashHistory} from 'react-router';
import login from './components/login';

const router = (
  <Router history = {hashHistory}>
      <Route path ="/" component={login}>
      </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));
