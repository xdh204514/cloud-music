import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { changePlayListInRanking } from "@/pages/player/store"
import { TopHeaderWrapper, TopHeaderLeft, TopHeaderRight } from "./style";
import { getSizeImage, formatMonthDay, getUpdateFrequency } from "@/utils/format-utils"

import DHOperatorBar from "@/components/content/operator-bar"

export default memo(function DHTopHeader() {
  // state and props

  // redux-hooks
  const dispatch = useDispatch()
  const { currentPlayList, allTopList, scrollHeight } = useSelector(state => ({
    currentPlayList: state.getIn(["ranking", "currentPlayList"]),
    allTopList: state.getIn(["ranking", "allTopList"]),
    scrollHeight: state.getIn(["ranking", "scrollHeight"]),
  }), shallowEqual)

  // react-hooks

  // other handle
  const coverImgUrl = currentPlayList && currentPlayList.coverImgUrl
  
  const playMusic = () => {
    dispatch(changePlayListInRanking({isPlayNow: true}));
  }

  const addToPlayList = () => {
    dispatch(changePlayListInRanking({isPlayNow: false}));
  }

  const scrollToComment = () => {
    // 从 state 中获取需要滚动的高度
    window.scrollTo(0, scrollHeight)
  }

  return (
    <TopHeaderWrapper>
      <TopHeaderLeft>
        <img src={getSizeImage(coverImgUrl, 150)} alt="" />
      </TopHeaderLeft>
      <TopHeaderRight>
        <div className="name">{currentPlayList.name}</div>
        <div className="info">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(currentPlayList.updateTime)}</div>
          <div className="update-f">（{getUpdateFrequency(currentPlayList, allTopList.list)}）</div>
        </div>
        <DHOperatorBar
          favorTitle={currentPlayList.subscribedCount}
          shareTitle={currentPlayList.shareCount}
          downloadTitle={"下载"}
          commentTitle={currentPlayList.commentCount}
          scrollToComment = {scrollToComment}
          playMusic={playMusic}
          addToPlayList={addToPlayList}
        />
      </TopHeaderRight>
    </TopHeaderWrapper>
  )
})
