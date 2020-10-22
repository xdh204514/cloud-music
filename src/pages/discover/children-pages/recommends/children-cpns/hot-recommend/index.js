import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actions'
import { HotRecommendWrapper } from './style'

import DHRecomendHeader from '@/components/content/recommend-header'
import DHSongCover from '@/components/content/song-cover'

export default memo(function DHHotRecommend() {

  // state

  // other hooks
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommends", "hotRecommends"])
  }), shallowEqual)


  // react hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <DHRecomendHeader title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map(item => {
            return (
              <DHSongCover info={item} showWriter={false} key={item.id} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
