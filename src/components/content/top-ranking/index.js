import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { TopRankingWrapper } from './style'
import { getSongDetailAction, resetPlayListAction } from '@/pages/player/store'


export default memo(function DHTopRanking(props) {
  // state and props
  const { info } = props
  const { tracks = [] } = info

  // redux-hooks
  const dispatch = useDispatch()
  // react-hooks

  // other handle
  const resetPlayList = (id) => {
    dispatch(resetPlayListAction({id: id}))
  }

  const playMusic = (item) => {
    const params = {
      ids: item.id,
      isPlayNow: true,
    }
    dispatch(getSongDetailAction(params));
  }

  const addToPlayList = (item) => {
    const params = {
      ids: item.id,
      isPlayNow: false,
    }
    dispatch(getSongDetailAction(params));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt={info.name} />
          <a className="image_cover" href="/todo" title={info.name}>{info.name}</a>
        </div>
        <div className="info">
          <a className="name" href="/todo" title={info.name}>{info.name}</a>
          <div className="btns">
            <div className="play">
              <button className="btn sprite_02" title="播放" onClick={event => resetPlayList(info.id)}> </button>
            </div>
            <div className="favor">
              <button className="btn sprite_02" href="/todo" title="收藏"> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <a className="name text-nowrap" href="/todo" title={item.name}>{item.name}</a>
                  <div className="operate">
                    <div className="btn1">
                      <button className="btn sprite_02 play" title="播放"  onClick={event => playMusic(item)}></button>
                    </div>
                    <div className="btn2">
                      <button className="btn sprite_icon2 addto" title="添加到播放列表" onClick={event => addToPlayList(item)}></button>
                    </div>
                    <div className="btn3">
                      <button className="btn sprite_02 favor" title="收藏"></button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
