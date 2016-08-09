import React from 'react';
import { Link,} from 'react-router';
import session from '../models/session';
import store from '../store';
import { hashHistory } from 'react-router';
import Modal from './modal';


export default React.createClass({
  getInitialState: function(){
    return{
      showModal: false,
      bands:[]
    };
  },
  updateState: function(){

    this.setState({bands:store.searchBands.toJSON()});
  },
  componentDidMount: function (){
    store.searchBands.on('update change', this.updateState);

  },
  componentWillUMount:function(){
    store.searchBands.off('update change',this.updateState)
  },

  voteButton: function(band,e){

    e.preventDefault();
    store.votes.create(
      {
        name: band.name,
        imgUrl:band.images[0].url,
        votes:1
      },
      {
      success: (e)=>{
        this.setState({showModal:true})
      }

    }
    )

    console.log("YOU CLICKED THE VOTE");
    // .append{modal}
  },

  submitButton: function(e){


    e.preventDefault();
    let searchContent = this.refs.searchContent.value;
    store.searchBands.searchBand(searchContent);

},


  render: function(){
    let modal;
if (this.state.showModal){
  modal = <Modal/>
}
    let bands = this.state.bands.map((band, i ,arr) =>{
      return (

        <li key={i}> {band.name}
        <img className ="bandPhoto" src = {`${band.images[0].url}`}/>
        <form onSubmit ={this.voteButton.bind(null, band)}>
          <input className="voteButton" type ="submit" name="button" value= "VOTE"/>
          </form>

        </li>
)
    }
  )
  return(
  <div className ="band">

  <h1>Who do you want to see?</h1>
    <h2>Search below and vote on your favorite artist</h2>
  <form onSubmit={this.submitButton}>
      <input id="bandSearch" ref='searchContent' type="text" name="Search" placeholder="Search for your favorite band/artist here."/>
      <input id ="bandSubmit" type="submit" name='button' value="Search"/>

    <p><Link to="/voteResults" >See Vote Results</Link></p>
      </form>

  <ul>{bands}</ul>
    {modal}

    </div>


)
}
});
