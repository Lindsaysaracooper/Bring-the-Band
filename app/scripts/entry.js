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
import store from './store';
import modal from './components/modal';

$(document).ajaxSend(function(evt,xhr,jquerysettings){
  // console.log(document.location);
if (jquerysettings.url.indexOf('spotify') === -1){
  // xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)

if (store.session.get('authtoken')){
  xhr.setRequestHeader('Authorization', `Kinvey ${store.session.get('authtoken')}`)

} else {
    xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
}
}
});


const router = (
  <Router history = {hashHistory}>
      <Route path ="/" component={login}></Route>
      <Route path ='/searchPage' component={searchPage}>
      <Route path ="/confirm" component = {modal}/>
        </Route>
      <Route path ="/signup" component={signup}></Route>
      <Route path ="/voteResults" component={voteResults}>
      </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));
