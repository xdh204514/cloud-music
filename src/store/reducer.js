import { combineReducers } from 'redux-immutable';

import { reducer as recommendsReducer } from '@/pages/discover/children-pages/recommends/store';
import { reducer as playerReducer } from '@/pages/player/store';
import { reducer as rankingReducer } from '@/pages/discover/children-pages/ranking/store';
import { reducer as playlistReducer } from '@/pages/discover/children-pages/playlist/store';
import { reducer as albumReducer } from '@/pages/discover/children-pages/albums/store';
import { reducer as artistReducer } from '@/pages/discover/children-pages/artists/store';

const cReducer = combineReducers({
  recommends: recommendsReducer,
  player: playerReducer,
  ranking: rankingReducer,
  playlist: playlistReducer,
  album: albumReducer,
  artist: artistReducer,
})

export default cReducer