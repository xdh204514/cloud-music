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

export const getArtistListAction = (params) => {
  return dispatch => {
    const newParams = {
      limit: HOT_ACTION_PER_PAGE_NUM,
      ...params
    }
    fetch.apiDiscover.artist.getArtistList(newParams).then(result => {
      dispatch(changeArtistListAction(result.artists))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeCurrentTypeAction = (currentType) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType,
})

export const changeCurrentAreaAction = (currentArea) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea,
})