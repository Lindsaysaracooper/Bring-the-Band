import Session from './models/session';
import SearchCollection from './collections/SearchCollection';


export default {
  session: new Session(),
  searchBands: new SearchCollection(),
};
