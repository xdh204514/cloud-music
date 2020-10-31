import * as fetch from "@/network/api";
import * as actionTypes from "./action-types";

import { handleCategoryData } from "@/utils/handle-data-utils"
import { PER_PAGE_NUM } from "@/common/constant"

const changeAllCategoryAction = (allCategory) => ({
  type: actionTypes.CHANGE_ALL_CATEGORY,
  allCategory
})

const changeCurrentPlayListAction = (currentPlayList) => ({
  type: actionTypes.CHANGE_CURRENT_PLAY_LIST,
  currentPlayList
})

export const changeCurrentCategoryAction = (currentCategory) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory
})

export const getAllCategoryAction = (params) => {
  return dispatch => {
    fetch.apiDiscover.playlist.getCatList().then(result => {
      const allCategory = handleCategoryData(result)
      dispatch(changeAllCategoryAction(allCategory))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const getCurrentPlayListAction = (params) => {
  return (dispatch, getState) => {
    // 1. 获取当前分类
    const currentCategory = getState().getIn(["playlist", "currentCategory"])

    // 2. 解构出完整的请求参数
    const newParams = {
      cat: currentCategory,
      limit: PER_PAGE_NUM,
      ...params,
    }

    // 3. 发送请求并分发数据
    fetch.apiDiscover.playlist.getPlayList(newParams).then(result => {
      dispatch(changeCurrentPlayListAction(result))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})