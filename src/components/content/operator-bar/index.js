import React, { memo } from 'react';
import { OperarorBarWrapper } from './style';

export default memo(function DHOperatorBar(props) {
  // stata and props
  const { 
    favorTitle, 
    shareTitle, 
    downloadTitle, 
    commentTitle, 
    scrollToComment,
    playMusic,
    addToPlayList,
  } = props;

  // redux-hooks

  // react-hooks

  // other handle
  const handlePlay = () => {
    if(playMusic) {
      playMusic()
    }
  }

  const handleAdd = () => {
    if(addToPlayList) {
      addToPlayList()
    }
  }

  const handleComment = () => {
    if (scrollToComment) {
      scrollToComment()
    }
  }

  return (
    <OperarorBarWrapper>
      <span className="play">
        <button className="play-icon sprite_button" onClick={event => handlePlay()}>
          <span className="play sprite_button" title="立即播放">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </button>
        <button className="add-icon sprite_button" title="添加到播放列表" onClick={event => handleAdd()}>+</button>
      </span>
      <button className="item sprite_button" title="收藏">
        <i className="icon favor-icon sprite_button text-nowrap ">{favorTitle}</i>
      </button>
      <button className="item sprite_button" title="分享">
        <i className="icon share-icon sprite_button text-nowrap ">{shareTitle}</i>
      </button>
      <button className="item sprite_button" title="下载">
        <i className="icon download-icon sprite_button text-nowrap ">{downloadTitle}</i>
      </button>
      <button className="item sprite_button" title="评论" onClick={event => handleComment()}>
        <i className="icon comment-icon sprite_button text-nowrap ">{commentTitle}</i>
      </button>
    </OperarorBarWrapper >
  )
})
