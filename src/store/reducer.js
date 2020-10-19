import { combineReducers } from 'redux-immutable'

import { reducer as recommendsReducer } from '@/pages/discover/children-pages/recommends/store'

const cReducer = combineReducers({
  recommends: recommendsReducer
})

export default cReducer