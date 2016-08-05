import store from '../store';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Link,} from 'react-router'


export default React.createClass({
  getInitialState: function(){
    return{};
  },
  updateState: function(){
    this.setState(store.session.toJSON());
  },
  componentDidMount: function (){
    store.session.on('change', this.updateState);

  },
  componentWillUMount:function(){
    store.session.off('change',this.updateState)
  },
  submitHandler: function (e){
      e.preventDefault();
      let username = this.refs.username.value;
      let password = this.refs.password.value;
      let data={
        username:username,
        password:password
      };
store.session.signup(data);
  },
  render: function(){
    if(this.state.authtoken){
      hashHistory.push('/searchPage');
  }
return(
<div>
<p> Haven't joined but want to? Sign up below.</p>
<h2> Sign Up </h2>
<form onSubmit= {this.submitHandler}>
  <input type="text" placeholder="username" ref="username"/>
  <input type="password" placeholder="password" ref="password"/>
  <input type="submit" value="Submit"/>
</form>
  <p> Already have a login? Go <Link to="/" > HERE </Link></p>
</div>
)
}
});
