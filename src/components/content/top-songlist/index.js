import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongDetailAction } from "@/pages/player/store";
import { TopSongListWrapper } from "./style";
import { getSizeImage, formatMinuteSecond } from "@/utils/format-utils"

import DHSongListHeader from "../songlist-header";

export default memo(function DHTopSongList(props) {
  // state and props
  const {getScrollHeight } = props

  // redux-hooks
  const dispatch = useDispatch()
  const { currentPlayList } = useSelector(state => ({
    currentPlayList: state.getIn(["ranking", "currentPlayList"]),
  }), shallowEqual)

  // react-hooks
  const topSongListRef = useRef()
  useEffect(() => {
    const scrollHeight = topSongListRef.current.offsetTop + topSongListRef.current.offsetHeight || 0
    getScrollHeight(scrollHeight)
  }, [getScrollHeight, currentPlayList])

  // other handle
  const playCount = currentPlayList.playCount
  const songCount = currentPlayList.trackCount
  const tracks = currentPlayList.tracks || []

  const playMusic = (item) =>{
    const params = {
      ids: item.id,
      isPlayNow: true,
    }
    dispatch(getSongDetailAction(params))
  }

  const addToPlayList = (item) => {
    const params = {
      ids: item.id,
      isPlayNow: false,
    }
    dispatch(getSongDetailAction(params))
  }

  return (
    <TopSongListWrapper ref={topSongListRef}>
      <DHSongListHeader songCount={songCount} playCount={playCount} />
      <div className="song-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span>{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ? (
                            <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                          ) : null
                        }
                        <span className="play sprite_table" onClick={event => playMusic(item)}></span>
                        <span className="name text-nowrap">{item.name}</span>
                      </div>
                    </td>
                    <td>
                      <div className="operator">
                        <div className="duration">
                          {formatMinuteSecond(item.dt)}
                        </div>
                        <div className="btns">
                          <span className="add sprite_icon2" title="添加到播放列表" onClick={event => addToPlayList(item)}></span>
                          <span className="favor sprite_icon2" title="收藏"> </span>
                          <span className="share sprite_icon2" title="分享"> </span>
                          <span className="download sprite_table" title="下载"> </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="singer-name">
                        {
                          item.ar.map((iten, index) => {
                            return (
                              <div className="text-nowrap" key={iten.id}>
                                <a href="/todo" >
                                  {iten.name}
                                </a>
                                {index !== item.ar.length - 1 ? " / " : ""}
                              </div>
                            )
                          })
                        }
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </TopSongListWrapper>
  )
})
