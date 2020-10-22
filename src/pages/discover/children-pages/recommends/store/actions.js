import * as actionTypes from './action-types'
import * as fetch from '@/network/api'
import {
  HOT_RECOMMENDS_LIMIT,
  NEW_ALBUMS_LIMIT,
  UP_RANKING_ID,
  NEW_RANKING_ID,
  ORIGINAL_RANKING_ID,
} from '@/common/constant'

const changeTopBannersAction = (topBanners) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: topBanners
})

// 返回值是一个函数，函数的返回值又是一个函数
// 为什么不直接返回里面的函数？
// 当需要参数的时候，则需要通过外面这层函数传递参数进来，里面那层有一个默认的参数
export const getTopBannersAction = () => {
  return dispatch => {
    fetch.apiDiscover.recommends.getTopBanners().then(result => {
      dispatch(changeTopBannersAction(result.banners))
    }).catch(error => {
      console.log(error)
    })
  }
}

const changeHotRecommendsAction = (hotRecommends) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: hotRecommends
})

export const getHotRecommendsAction = () => {
  return dispatch => {
    fetch.apiDiscover.recommends.getHotRecommends({ limit: HOT_RECOMMENDS_LIMIT }).then(result => {
      dispatch(changeHotRecommendsAction(result.result))
    }).catch(error => {
      console.log(error)
    })
  }
}

const changeNewAlbumsAction = (newAlbums) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: newAlbums
})

export const getNewAlbumsAction = () => {
  return dispatch => {
    fetch.apiDiscover.recommends.getNewAlbums({ limit: NEW_ALBUMS_LIMIT }).then(result => {
      dispatch(changeNewAlbumsAction(result.albums))
    }).catch(error => {
      console.log(error)
    })
  }
}

const changeUpRankingAction = (upRanking) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: upRanking
})

const changeNewRankingAction = (newRanking) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: newRanking
})

const changeOriginalRankingAction = (originalRanking) => ({
  type: actionTypes.CHANGE_ORIGINAL_RANKING,
  originalRanking: originalRanking
})


export const getPlayListAction = (id) => {
  return dispatch => {
    fetch.apiDiscover.recommends.getPlayList({ id: id }).then(result => {
      switch (id) {
        case UP_RANKING_ID:
          dispatch(changeUpRankingAction(result.playlist));
          break;
        case NEW_RANKING_ID:
          dispatch(changeNewRankingAction(result.playlist));
          break;
        case ORIGINAL_RANKING_ID:
          dispatch(changeOriginalRankingAction(result.playlist));
          break;
        default:
      }
    }).catch(error => {
      console.log(error)
    })
  }
}