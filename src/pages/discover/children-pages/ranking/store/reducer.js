import { Map } from 'immutable';
import * as actionTypes from "./action-types";

const defaultState = Map({
  allTopList: [],
  currentIndex: 0,
  currentPlayList: {},
  scrollHeight: 0,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALL_TOP_LIST:
      return state.set("allTopList", action.allTopList)
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex)
    case actionTypes.CHANGE_CURRENT_PLAY_LIST:
      return state.set("currentPlayList", action.currentPlayList)
    case actionTypes.CHANGE_SCROLL_HEIGHT:
      return state.set("scrollHeight", action.scrollHeight)
    default:
      return state
  }
}

export default reducer