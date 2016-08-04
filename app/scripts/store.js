import session from './models/session';
import Bands from './collections/bands';
import Band from './models/band';


export default {
  session: new Session(),
  band: new Band(),
  bands: new Bands()
};
