import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { SongCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'
import { resetPlayListAction } from '@/pages/player/store'

export default memo(function DHSongCover(props) {

  // state and props
  const { info, showWriter, right } = props

  // redux hooks
  const dispatch = useDispatch()
  
  // other handle
  const resetPlayList = (id) => {
    dispatch(resetPlayListAction({id: id}))
  }

  return (
    <SongCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt={info.name} className="img"/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" onClick={event => resetPlayList(info.id)}></i>
          </div>
        </div>
      </div>
      <a href="/todo" className={"cover-name " + (showWriter ? "a-nowrap" : "a-nowrap2")} title={info.name}>{info.name}</a>
      <div className="cover-witer text-nowrap">{showWriter && ("by " + (info.copywriter || info.creator.nickname))}</div>
    </SongCoverWrapper>
  )
})
