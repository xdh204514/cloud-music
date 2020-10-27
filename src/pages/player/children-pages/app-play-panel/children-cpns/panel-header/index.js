import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { PanelHeaderWrapper, PanleHeaderLeft, PanleHeaderRight } from "./style"
import { resetPlayListAction } from "@/pages/player/store"

export default memo(function DHPanelHeader() {

  // state and props

  // redux-hooks
  const { playList, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"]),
  }), shallowEqual)
  const dispatch = useDispatch()

  // other handle
  const resetPlayList = (id) => {
    dispatch(resetPlayListAction({id}))
  }

  return (
    <PanelHeaderWrapper>
      <PanleHeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button className="btn1">
            <i className="sprite_playlist icon favor"></i>
            全部收藏
          </button>
          <button className="btn2" onClick={event => resetPlayList(-1)}>
            <i className="sprite_playlist icon delete"></i>
            清除
          </button>
        </div>
      </PanleHeaderLeft>
      <PanleHeaderRight>
        {currentSong.name}
      </PanleHeaderRight>
    </PanelHeaderWrapper>
  )
})
