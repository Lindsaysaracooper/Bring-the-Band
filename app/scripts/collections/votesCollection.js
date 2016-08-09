import Backbone from 'backbone';
import $ from 'jquery';
import searchModel from '../models/searchModel';
import settings from '../settings';

export default Backbone.Collection.extend({
  url: `https:/baas.kinvey.com/appdata/${settings.appId}/topbands`,
  model: searchModel,

});
