import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { getSongDetailAction, deleteOneInPlayListAction } from "@/pages/player/store"
import { MusicListWrapper } from "./style";
import { formatMinuteSecond } from '@/utils/format-utils';

export default memo(function DHMusicList() {
  // state and props

  // redux-hooks
  const dispatch = useDispatch()
  const { playList, currentSongIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"]),
  }), shallowEqual)

  // react-hooks

  // other handle
  const changePalyMusic = (item) => {
    const params = {
      ids: item.id,
      isPlayNow: true,
    }
    dispatch(getSongDetailAction(params))
  }

  const deleteOneInPlayList = (event, index) => {
    event.stopPropagation()
    dispatch(deleteOneInPlayListAction({index}))
  }

  return (
    <MusicListWrapper>
      {
        playList.map((item, index) => {
          return (
            <div 
              className={"item " + (currentSongIndex === index ? "active" : "")} 
              key={item.id} 
              onClick={event => changePalyMusic(item)}
            >
              <div className="item-left">{item.name}</div>
              <div className="item-right">
                <div className="operator">
                  <button className="btn1" title="收藏">
                    <i className="sprite_playlist icon favor"></i>
                  </button>
                  <button className="btn2" title="分享">
                    <i className="sprite_playlist icon share"></i>
                  </button>
                  <button className="btn3" title="下载">
                    <i className="sprite_playlist icon download"></i>
                  </button>
                  <button className="btn4" title="删除" onClick={event => deleteOneInPlayList(event, index)}>
                    <i className="sprite_playlist icon delete"></i>
                  </button>
                </div>
                <div className="info">
                  <span className="singer a-nowrap">{item.ar && item.ar[0].name}</span>
                  <span className="duration">{formatMinuteSecond(item.dt)}</span>
                  <span className="sprite_playlist link"></span>
                </div>
              </div>
            </div>)
        })
      }
    </MusicListWrapper>
  )
})
