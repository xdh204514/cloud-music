import * as actionTypes from "./action-types";
import * as fetch from "@/network/api";

import { RADIO_PER_PAGE_NUM } from "@/common/constant";

const changeCateListAction = (cateList) => ({
  type: actionTypes.CHANGE_CATE_LIST,
  cateList
})

const changeRecommendListAction = (recommendList) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  recommendList
})

const changeRadioListAction = (radioList) => ({
  type: actionTypes.CHANGE_RADIO_LIST,
  radioList
})

export const changeCurrentIdAction = (currentCatId) => ({
  type: actionTypes.CHANGE_CURRENT_CAT_ID,
  currentCatId
})

export const getCateListAction = (params) => {
  return dispatch => {
    fetch.apiDiscover.djradio.getCateList(params).then(result => {
      if (result.categories) {
        dispatch(changeCateListAction(result.categories))
        dispatch(changeCurrentIdAction(result.categories[0].id))
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

export const getRecommendListAction = (params) => {
  return dispatch => {
    fetch.apiDiscover.djradio.getRecommendList(params).then(result => {
      dispatch(changeRecommendListAction(result.djRadios))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const getRadioListAction = (params) => {
  return dispatch => {
    const newParams = {
      limit: RADIO_PER_PAGE_NUM,
      ...params
    }
    fetch.apiDiscover.djradio.getRadioList(newParams).then(result => {
      dispatch(changeRadioListAction(result.djRadios))
    }).catch(error => {
      console.log(error)
    })
  }
}