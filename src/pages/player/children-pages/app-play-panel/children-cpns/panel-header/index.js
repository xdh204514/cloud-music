import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeShowPlayPanelAction } from "@/pages/player/store"
import { PanelHeaderWrapper, PanleHeaderLeft, PanleHeaderRight } from "./style"
import { resetPlayListAction } from "@/pages/player/store"

export default memo(function DHPanelHeader() {
  // state and props

  // redux-hooks
  const { playList, currentSong, showPlayPanel } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"]),
    showPlayPanel: state.getIn(["player", "showPlayPanel"]),
  }), shallowEqual)
  const dispatch = useDispatch()

  // other handle
  const resetPlayList = (id) => {
    dispatch(resetPlayListAction({id}))
  }

  const changeShowPlayPanel = () => {
    dispatch(changeShowPlayPanelAction(!showPlayPanel))
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
        <button className="closeBtn" onClick={event => changeShowPlayPanel()}>
          <i className="sprite_playlist icon close"></i>
        </button>
      </PanleHeaderRight>
    </PanelHeaderWrapper>
  )
})
