import { Map } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = Map({
  artistList: [],
})

function reducer(state=defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList)
    default:
      return state
  }
}

export default reducer