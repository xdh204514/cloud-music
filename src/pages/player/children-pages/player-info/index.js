import React, { memo, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useLocation } from "react-router-dom";

import DHOperatorBar from "@/components/content/operator-bar";

import { 
  getPlayerCurrentSongAction, 
  getPlayerLyricListAction, 
  getPlayerSimiSongListAction,
  getPlayerSimiPlayListAction,
  getPlayerMusicCommentAction,
  getSongDetailAction,
} from "../../store/actions";
import { getSizeImage } from "@/utils/format-utils";
import { PlayerInfoWrapper, PlayerInfoLeft, PlayerInfoRight } from "./style";

export default memo(function DHPlayerInfo() {
  const id = useLocation().state.id

  // state and props
  const [isSpread, setIsSpread] = useState(false)
  // redux-hooks
  const dispatch = useDispatch()
  const { currentSong, lyricList, playerMusicComment, playerCurrentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "playerCurrentSong"]),
    lyricList: state.getIn(["player", "playerLyricList"]),
    playerMusicComment: state.getIn(["player", "playerMusicComment"]),
    playerCurrentSong: state.getIn(["player", "playerCurrentSong"]),
  }), shallowEqual)

  // react-hooks
  useEffect(() => {
    dispatch(getPlayerCurrentSongAction({ids: id}))
    dispatch(getPlayerLyricListAction({id: id}))
    dispatch(getPlayerSimiSongListAction({id:id}))
    dispatch(getPlayerSimiPlayListAction({id:id}))
  }, [dispatch, id])

  useEffect(() => {
    const params = {
      id: id,
      limit: 1
    }
    dispatch(getPlayerMusicCommentAction(params))
  }, [dispatch, id])

  const lyricRef = useRef()

  // other handle
  let picUrl = currentSong.al ? currentSong.al.picUrl : ""
  picUrl = getSizeImage(picUrl, 130)
  const totalCount = isSpread ? lyricList.length : 13

  const playMusic = () => {
    const params = {
      ids: playerCurrentSong.id,
      isPlayNow: true,
    }
    dispatch(getSongDetailAction(params));
  }

  const addToPlayList = () => {
    const params = {
      ids: playerCurrentSong.id,
      isPlayNow: false,
    }
    dispatch(getSongDetailAction(params));
  }

  const scrollToComment = () => {
    // 滚动的高度 = 歌词距浏览器顶部的高度 + 歌词的高度
    const position =  lyricRef.current.offsetTop + lyricRef.current.offsetHeight || 0
    window.scrollTo(0, position)
  }

  return (
    <PlayerInfoWrapper>
      <PlayerInfoLeft>
        <div className="image">
          <img src={picUrl} alt="" />
          <span className="image_cover cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2 icon"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </PlayerInfoLeft>
      <PlayerInfoRight isSpread={isSpread}>
        <div className="header">
          <div className="title">
            <i className="sprite_icon2 icon"></i>
            <span className="name">{currentSong.name}</span>
            <a className="sprite_icon2 mv" href="/todo" title="MV"> </a>
          </div>
          <div>
            <span className="alia">{currentSong.alia && currentSong.alia[0]}</span>
          </div>
        </div>
        <div className="singer">
          <span>歌手：</span>
          <a href="/todo">{currentSong.ar && currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span>所属专辑：</span>
          <a href="/todo">{currentSong.al && currentSong.al.name}</a>
        </div>
        <div className="operator">
          <DHOperatorBar
            favorTitle="收藏"
            shareTitle="分享"
            downloadTitle="下载"
            commentTitle={playerMusicComment && playerMusicComment.total}
            scrollToComment = {scrollToComment}
            playMusic={playMusic}
            addToPlayList={addToPlayList}
          />
        </div>
        <div className="lyric" ref={lyricRef}>
          {
            lyricList.slice(0, totalCount).map((item, index) => {
              return (
                <p key={item.time}>{item.content !== "" ? item.content : " ".replace(/ /g, "\u00a0")}</p>
              )
            })
          }
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </PlayerInfoRight>
    </PlayerInfoWrapper>
  )
})
