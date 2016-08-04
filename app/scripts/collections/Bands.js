import Backbone from 'backbone';
import Band from '../models';


const Bands = Backbone.Collection.extend({
  url: '',
  model: Band

});

export default Bands;
