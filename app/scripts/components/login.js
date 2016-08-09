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
      <h1> Bring The Band </h1>
      <h2> Who do YOU want to see? </h2>
      <h3> Kiss 96.7 is letting you pick the next performing artist to come to Austin.</h3>
        <form onSubmit= {this.submitHandler}>
        <h1 className="loginTxt"> LOG  IN </h1>
        <input id="textbox" type="text" placeholder="username" ref="username"/>
				<input id="textbox" type="password" placeholder="password" ref="password"/>
				<input id="submit" type="submit" value="Submit"/>
		      <p> Want to vote but haven't created an account? Sign-up<Link to="/signup" > HERE </Link></p>
      	</form>
      </div>

    )
  }

});
