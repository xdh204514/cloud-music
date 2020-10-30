import * as actionTypes from './action-types';
import * as fetch from '@/network/api';

const changeAllTopListAction = (allTopList) => ({
  type: actionTypes.CHANGE_ALL_TOP_LIST,
  allTopList
})

export const getAllTopListAction = () => {
  return dispatch => {
    fetch.apiDiscover.ranking.getAllTopList().then(result => {
      dispatch(changeAllTopListAction(result))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeCurrentIndexAction = (currentIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex
})

const changeCurrentPlayListAction = (currentPlayList) => ({
  type: actionTypes.CHANGE_CURRENT_PLAY_LIST,
  currentPlayList
})

export const getCurrentPlayListAction = (params) => {
  return dispatch => {
    fetch.apiDiscover.ranking.getPlayList(params).then(result => {
      dispatch(changeCurrentPlayListAction(result.playlist))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeScrollHeightAction = (scrollHeight) => ({
  type: actionTypes.CHANGE_SCROLL_HEIGHT,
  scrollHeight,
})