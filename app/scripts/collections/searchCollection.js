import Backbone from 'backbone';
import SearchModel from '../models/searchModel';
import $ from 'jquery';

export default Backbone.Collection.extend({
  url: '',
  model: SearchModel,

  searchBand:function(searchData){
    $.ajax({
      type:'GET',
      url:`https://api.spotify.com/v1/search`,
      data: { q: searchData,
              type: 'artist'
            },
      success:(s)=>{
        let bands = s.artists.items.map(function(band, i, arr){

          if (!band.images.length){
          // console.log('bands after if', bands.name);
          band.images[0] = {url: 'http://wpmedia.news.nationalpost.com/2016/03/hanson.jpg?quality=65&strip=all&w=620'}
          // console.log(bands.images.url)

        }
          // {images[0]=== url'http://wpmedia.news.nationalpost.com/2016/03/hanson.jpg?quality=65&strip=all&w=620'

        // return images[0]
  return band;
      })

              this.set(bands);
    }
  })
  }
});
