import React, { memo } from 'react';

import { ListHeaderWrapper } from "./style";

export default memo(function DHSongListHeader(props) {
  const {songCount, playCount} = props
  return (
    <ListHeaderWrapper>
      <div className="left">
        <h2>歌曲列表</h2>
        <span>{songCount}首歌</span>
      </div>
      <div className="right">
        <div>播放：<span>{playCount}</span>次</div>
      </div>
    </ListHeaderWrapper>
  )
})

// 排行榜页面 歌曲列表的头部组件
