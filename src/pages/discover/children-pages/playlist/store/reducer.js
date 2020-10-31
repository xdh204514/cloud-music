import { Map } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = Map({
  allCategory: [],
  currentCategory: "全部",
  currentPlayList: {},
  currentPage: 1,
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALL_CATEGORY:
      return state.set("allCategory", action.allCategory)
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory)
    case actionTypes.CHANGE_CURRENT_PLAY_LIST:
      return state.set("currentPlayList", action.currentPlayList)
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.currentPage)
    default:
      return state
  }
}

export default reducer