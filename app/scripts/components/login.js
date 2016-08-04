import React from 'react';
import {Link}from 'react-router';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';


const Login = React.createClass({
  submitFunction: function (e){
      e.preventDefault();
      let username = this.refs.username.value;
      let password = this.refs.password.value;
      let data={
        username:username,
        passord:password
      };
      hashHistory.push('/');
  },
  render: function(){
    return(
      <div>
      <h1> Spotify Favorites </h1>
      <h2> Welcome to Spotify Favorites.</h2>
      <p> Login to view your favorite bands and vote on new ones. </p>
      <h2> Login </h2>
      <form onSubmit= {this.submitFunction}>
        <input type="text" placeholder="username" ref="username"/>
				<input type="password" placeholder="password" ref="password"/>
				<input type="submit" value="Submit"/>
			</form>
      <p> Haven't joined but want to? Sign up below.</p>
      <h2> Sign Up </h2>
      <form onSubmit= {this.submitFunction}>
        <input type="text" placeholder="username" ref="username"/>
        <input type="password" placeholder="password" ref="password"/>
        <input type="submit" value="Submit"/>
      </form>
      </div>

    )
  }

});

export default Login;
