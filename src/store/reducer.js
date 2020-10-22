import { combineReducers } from 'redux-immutable'

import { reducer as recommendsReducer } from '@/pages/discover/children-pages/recommends/store'
import { reducer as playerReducer } from '@/pages/player/store'

const cReducer = combineReducers({
  recommends: recommendsReducer,
  player: playerReducer,
})

export default cReducer