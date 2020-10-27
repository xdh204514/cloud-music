import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { AppPlayPanelWrapper } from './style'

import DHPanelHeader from "./children-cpns/panel-header"
import DHMusicList from "./children-cpns/music-list"
import DHLyricList from "./children-cpns/lyric-list"

export default memo(function DHAppPlayPanel() {

  const { currentSong = {} } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }))

  let picUrl = currentSong.al ? currentSong.al.picUrl + "?imageView&blur=40x20" : ""

  return (
    <AppPlayPanelWrapper className="wrap-v3">
      <DHPanelHeader />
      <div className="main">
        <img className="img" src={picUrl} alt=""/>
        <DHMusicList />
        <DHLyricList />
      </div>
    </AppPlayPanelWrapper>
  )
})
