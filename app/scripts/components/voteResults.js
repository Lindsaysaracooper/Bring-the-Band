import React from 'react';
import { Link,} from 'react-router';
import store from '../store';


export default React.createClass({
    getInitialState: function(){
      return{
        votes:[]
      };
    },
    updateState: function(){
      this.setState({votes:store.votes.toJSON()});
    },
    componentDidMount: function (){
      store.votes.on('update change', this.updateState);
      store.votes.fetch();
    },
    componentWillUMount:function(){
      store.votes.off('update change',this.updateState)
    },
  render: function(){
    console.log('votes', this.state.votes);
    let voteResults = this.state.votes.map((vote,i,arr)=>{
      return(
        <li className="voteList" key={i}> {vote.name}
        <img className = "bandPhoto" src = {`${vote.imgUrl}`}/>
        <input className="voteButton" type = "text" name="votes" value={`${vote.votes} votes`}/>
        </li>
      )
    })
    return(
      <div className="band">
      <h1> Vote Results </h1>
      <ul id="voteUl">
      {voteResults}
      </ul>
      <Link to ="/searchPage" > Back to Search </Link>
      </div>
    )
  }

});
