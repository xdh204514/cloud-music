import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from "react-router-dom";

import { 
  getPlayerSimiSongListAction,
  getSongDetailAction,
 } from "../../store/actions";
import { PlayerSongWrapper } from "./style"

import DHThemeHeaderPlayer from "@/components/content/theme-header-player"

export default memo(function DHPlayerSongs() {
  // state and props
  const id = useLocation().state.id

  // redux-hooks
  const dispatch = useDispatch()
  const { playerSimiSongList } = useSelector(state => ({
    playerSimiSongList: state.getIn(["player", "playerSimiSongList"]),
  }))

  // react-hooks
  useEffect(() => {
    dispatch(getPlayerSimiSongListAction({ id: id }))
  }, [dispatch, id])

  // other handle
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
    <PlayerSongWrapper>
      <DHThemeHeaderPlayer title="相似歌曲" />
      <div className="simi-songlist">
        {
          playerSimiSongList.map(item => {
            return (
              <div className="item" key={item.id}>
                <div className="info text-nowrap">
                  <NavLink 
                    className="name" 
                    to={{
                      pathname: "/discover/song", 
                      search: "?id=" + item.id,
                      state: {id: item.id},
                    }}>{item.name}
                  </NavLink>
                  <div className="singers text-nowrap">
                    {
                      item.artists.map((iten, index) => {
                        return (
                          <div key={iten.id}>
                            <a href="/todo" >
                              {iten.name}
                            </a>
                            {index !== item.artists.length - 1 ? " / " : ""}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="operator">
                  <button 
                    className="icon sprite_icon3 play" 
                    title="立即播放" 
                    onClick={event => playMusic(item)}
                  ></button>
                  <button 
                    className="icon sprite_icon3 add" 
                    title="添加到播放列表"
                    onClick={event => addToPlayList(item)}
                  ></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSongWrapper>
  )
})
