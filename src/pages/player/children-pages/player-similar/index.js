import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import DHThemeHeaderPlayer from "@/components/content/theme-header-player"

import { getPlayerSimiPlayListAction } from "../../store/actions";
import { PlayerSimilarWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function DHPlayerSimilar() {
  // state and props
  const id = useLocation().state.id

  // redux-hooks
  const dispatch = useDispatch()
  const { playerSimiPlayList } = useSelector(state => ({
    playerSimiPlayList: state.getIn(["player", "playerSimiPlayList"]),
  }))

  // react-hooks
  useEffect(() => {
    dispatch(getPlayerSimiPlayListAction({id:id}))
  }, [dispatch, id])

  // other handle


  return (
    <PlayerSimilarWrapper>
      <DHThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="simi-playlist">
        {
          playerSimiPlayList.map(item => {
            return(
              <div className="item" key={item.id}>
                <a className="image" href="/todo">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt=""/>
                </a>
                <div className="info text-nowrap">
                  <a className="name" href="/todo" title={item.name}>{item.name}</a>
                  <div className="auchor">
                    by 
                    <a href="/todo" className="nickname" title={item.creator.nickname}>{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSimilarWrapper>
  )
})
