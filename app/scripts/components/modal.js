import React from "react";
import {hashHistory} from "react-router";
import store from '../store';

export default React.createClass({

getInitialState: function(){
  return {
    goToVotePage: null,
  }
},

exitClickHandler:function(e){
  console.log('BUT WHYYY');
    this.props.closeModal()
  hashHistory.push('/searchPage');

},
votesClickHandler:function(e){
  hashHistory.push('/voteResults');
},

  openModal () { this.setState({showModal: true}); },


  render: function(){
    return(
      <div className ="modal-container">
        <div className = 'modal'>
          <h1> Thanks for Voting!</h1>
          <p> Want to see the results page?
          <input className="buttonModal"
            type="button"
            id="voteResults"
            value="Votes Page"
            onClick={this.votesClickHandler}/> </p>

            <p> Not yet, I'd like to vote more
            <input className="buttonModal"
              type="button"
              id="read"
              value="Back to Search Page"
              onClick={this.exitClickHandler}/></p>
          </div>
      </div>
    );
  }
});
