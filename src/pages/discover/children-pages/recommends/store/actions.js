import * as actionTypes from './action-types'
import * as fetch from '@/network/api'

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