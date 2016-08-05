import React from 'react';
import { Link,} from 'react-router';
import session from '../models/session';
import store from '../store';
import bandList from '../collections/searchCollection';

export default React.createClass({
  getInitialState: function(){
    return{
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

  voteButton: function(e){

    e.preventDefault();
    console.log("YOU CLICKED THE VOTE");
  },

  submitButton: function(e){


    e.preventDefault();
    let searchContent = this.refs.searchContent.value;
    store.searchBands.searchBand(searchContent);

},


  render: function(){
    let bands = this.state.bands.map((band, i ,arr) =>{
      return (
        <li>{band.name}
        <img className ="bandPhoto" src = {`${band.images[0].url}`}/>
        <form onSubmit ={this.voteButton}>
          <input type ="submit" name="button" value= "VOTE"/>
          </form>

        </li>
)
    }
  )
  return(
  <div className ="band">
      <Link to="/voteResults" >All Vote Results</Link>
  <h1>Vote for your favorite band/artist</h1>
    <h2>Search below and vote on your favorite artist</h2>
  <form onSubmit={this.submitButton}>
      <input ref='searchContent' type="text" name="Search" placeholder="Search for your favorite band/artist here."/>
      <input type="submit" name='button' value="Search"/>
  </form>
  <ul>{bands}</ul>


    </div>


)
}
});
