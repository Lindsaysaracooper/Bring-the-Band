import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults:
  {
    name: '',
    imgUrl:'',
    votes:0

  }
});
