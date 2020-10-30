import React, { memo, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getAllTopListAction, changeScrollHeightAction } from "./store/actions";

import { DHRankingWrapper, RankingLeft, RankingRight } from "./style";

import DHTopSongList from "@/components/content/top-songlist";
import DHTopPlayList from "./children-cpns/top-playlist";
import DHTopHeader from "./children-cpns/top-header";

export default memo(function DHRanking() {
  // redux-hooks
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTopListAction())
  }, [dispatch])

  // other handle
  const getScrollHeight = (height) => {
    dispatch(changeScrollHeightAction(height))
  }
  return (
    <DHRankingWrapper className="wrap-v2 wrap-bg">
      <RankingLeft>
        <DHTopPlayList />getScroll
      </RankingLeft>
      <RankingRight>
        <DHTopHeader />
        <DHTopSongList getScrollHeight={height => getScrollHeight(height)} />
        <div style={{height: "1000px"}}>榜单评论</div>
      </RankingRight>
    </DHRankingWrapper>
  )
})
