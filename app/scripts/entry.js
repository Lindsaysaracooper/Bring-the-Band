import React from 'react';
import SearchCollection from './collections/SearchCollection';
import ReactDOM from 'react-dom';
import settings from './settings';
import {Router, Route, Link, hashHistory} from 'react-router';
import login from './components/login';
import $ from 'jquery';
import signup from './components/signup';
import searchPage from './components/searchPage';
import voteResults from './components/voteResults';

$(document).ajaxSend(function(evt,xhr,jquerysettings){
  // console.log(document.location);
if (jquerysettings.url.indexOf('spotify') === -1)
  xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
});


const router = (
  <Router history = {hashHistory}>
      <Route path ="/" component={login}></Route>
      <Route path ='/searchPage' component={searchPage}></Route>
      <Route path ="/signup" component={signup}>
      </Route>
      <Route path ="/voteResults" component={voteResults}>
      </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));
