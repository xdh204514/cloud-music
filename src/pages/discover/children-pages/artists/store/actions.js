import * as actionTypes from "./action-types";
import * as fetch from "@/network/api";
import { HOT_ACTION_PER_PAGE_NUM } from "@/common/constant"

const changeArtistListAction = (artistList) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const getHotArtistListAction = () => {
  return dispatch => {
    const params = {
      limit: HOT_ACTION_PER_PAGE_NUM,
    }
    fetch.apiDiscover.artist.getHotArtistList(params).then(result => {
      dispatch(changeArtistListAction(result.artists))
    }).catch(error => {
      console.log(error)
    })
  }
}