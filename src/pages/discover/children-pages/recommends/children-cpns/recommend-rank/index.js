import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getPlayListAction } from '../../store/actions'
import {
  UP_RANKING_ID,
  NEW_RANKING_ID,
  ORIGINAL_RANKING_ID,
} from '@/common/constant'
import { RecommendRankWrapper } from './style'

import DHRecomendHeader from '@/components/content/recommend-header'
import DHTopRanking from '@/components/content/top-ranking'

export default memo(function DHRecommendRank() {

  // other hooks
  const dispatch = useDispatch()
  const { upRanking, newRanking, originalRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommends", "upRanking"]),
    newRanking: state.getIn(["recommends", "newRanking"]),
    originalRanking: state.getIn(["recommends", "originalRanking"]),
  }), shallowEqual)

  // react hooks
  useEffect(() => {
    dispatch(getPlayListAction(UP_RANKING_ID))
    dispatch(getPlayListAction(NEW_RANKING_ID))
    dispatch(getPlayListAction(ORIGINAL_RANKING_ID))
  }, [dispatch])

  return (
    <RecommendRankWrapper>
      <DHRecomendHeader title="榜单" />
      <div className="rank-list">
        <DHTopRanking info={upRanking} />
        <DHTopRanking info={newRanking} />
        <DHTopRanking info={originalRanking} />
      </div>
    </RecommendRankWrapper>
  )
})
