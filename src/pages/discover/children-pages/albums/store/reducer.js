import { Map } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = Map({
  hotAlbumList: [],
  topAlbumList: [],
  topTotalCount: 0,
  currentPage: 1,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM_LIST:
      return state.set("hotAlbumList", action.hotAlbumList)
    case actionTypes.CHANGE_TOP_ALBUM_LIST:
      return state.set("topAlbumList", action.topAlbumList)
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.currentPage)
    case actionTypes.CHANGE_TOP_TOTAL_COUNT:
      return state.set("topTotalCount", action.topTotalCount)
    default:
      return state
  }
}

export default reducer