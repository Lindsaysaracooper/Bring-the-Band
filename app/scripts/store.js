import Session from './models/session';
import SearchCollection from './collections/SearchCollection';
import VotesCollection from './collections/VotesCollection';

export default {
  session: new Session(),
  searchBands: new SearchCollection(),
  votes: new VotesCollection()
};
