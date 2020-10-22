import * as actionTypes from './action-types'
import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originalRanking: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return {...state, topBanners: action.topBanners}
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums)

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case actionTypes.CHANGE_ORIGINAL_RANKING:
      return state.set("originalRanking", action.originalRanking)
    default:
      return state
  }
}

export default reducer