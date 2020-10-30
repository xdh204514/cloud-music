import { combineReducers } from 'redux-immutable';

import { reducer as recommendsReducer } from '@/pages/discover/children-pages/recommends/store';
import { reducer as playerReducer } from '@/pages/player/store';
import { reducer as rankingReducer } from '@/pages/discover/children-pages/ranking/store';

const cReducer = combineReducers({
  recommends: recommendsReducer,
  player: playerReducer,
  ranking: rankingReducer,
})

export default cReducer