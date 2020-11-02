import * as fetch from "@/network/api";
import * as actionTypes from "./action-types";
import { PER_PAGE_NUM } from "@/common/constant"

const changeHotAlbumListAction = (hotAlbumList) => ({
  type: actionTypes.CHANGE_HOT_ALBUM_LIST,
  hotAlbumList
})

const changeTopAlbumListAction = (topAlbumList) => ({
  type: actionTypes.CHANGE_TOP_ALBUM_LIST,
  topAlbumList
})

const changeTopTotalCountAction = (topTotalCount) => ({
  type: actionTypes.CHANGE_TOP_TOTAL_COUNT,
  topTotalCount
})

export const getHotAlbumListAction = (params) => {
  return dispatch => {
    fetch.apiDiscover.album.getHotAlbum(params).then(result => {
      dispatch(changeHotAlbumListAction(result.albums))
    })
  }
}

export const getTopAlbumListAction = (params) => {
  return dispatch => {
    const newParams = {
      limit: PER_PAGE_NUM,
      ...params
    }
    fetch.apiDiscover.album.getTopAlbum(newParams).then(result => {
      dispatch(changeTopAlbumListAction(result.albums))
      dispatch(changeTopTotalCountAction(result.total))
    })
  }
}

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})