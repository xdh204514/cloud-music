import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getRecommendListAction } from "../../store/actions";
import { RecommendListWrapper, ItemWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";


import DHThemeHeaderNormal from "@/components/content/theme-header-normal";

export default memo(function DHRecommendList() {
  // state and props

  // redux-hooks
  const dispatch = useDispatch()
  const { currentCatId, recommendList } = useSelector(state => ({
    currentCatId: state.getIn(["djradio", "currentCatId"]),
    recommendList: state.getIn(["djradio", "recommendList"]),
  }), shallowEqual)

  // react-hooks
  useEffect(() => {
    currentCatId !== -1 && dispatch(getRecommendListAction({ type: currentCatId, }))
  }, [dispatch, currentCatId])

  // other handle
  return (
    <RecommendListWrapper>
      <DHThemeHeaderNormal title="优秀新电台" />
      <div className="recommend-list">
        {
          recommendList.slice(0, 5).map((item, index) => {
            return (
              <ItemWrapper key={item.id}>
                <a href="/#">
                  <img src={getSizeImage(item.picUrl, 150)} alt="" />
                </a>
                <a href="/#" className="text-nowrap name">{item.name}</a>
                <p className="text-nowrap">{item.desc}</p>
              </ItemWrapper>
            )
          })
        }
      </div>
    </RecommendListWrapper>
  )
})
