import { Map } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = Map({
  cateList: [],
  recommendList: [],
  radioList: [],
  currentCatId: -1,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATE_LIST:
      return state.set("cateList", action.cateList)
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.recommendList)
    case actionTypes.CHANGE_RADIO_LIST:
      return state.set("radioList", action.radioList)
    case actionTypes.CHANGE_CURRENT_CAT_ID:
      return state.set("currentCatId", action.currentCatId)
    default:
      return state
  }
}

export default reducer