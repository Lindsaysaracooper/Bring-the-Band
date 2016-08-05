import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import store from '../store';
import { Link,} from 'react-router'
import signup from './signup';

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
store.session.login(data);
  },
  render: function(){
    console.log(this.state);
    if(this.state.authtoken){
        console.log("what happened?");
      hashHistory.push('/searchPage');
    }
    return(
      <div className="login">
      <img src ="#"/>
      <h1> Spotify Favorites </h1>
      <h2> Welcome to Spotify Favorites.</h2>
      <p> Login to view your favorite bands and vote on new ones. </p>
      <h2> Login </h2>
      <form onSubmit= {this.submitHandler}>
        <input type="text" placeholder="username" ref="username"/>
				<input type="password" placeholder="password" ref="password"/>
				<input type="submit" value="Submit"/>
			</form>
      <p> Haven't joined but want to? Sign up <Link to="/signup" > HERE </Link></p>
      </div>

    )
  }

});
