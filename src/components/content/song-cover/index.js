import React, { memo } from 'react'

import { SongCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'

export default memo(function DHSongCover(props) {

  const { info, showWriter = true} = props
  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} className="img"/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <a href="/todo" className={"cover-name " + (showWriter ? "a-nowrap" : "a-nowrap2")}>{info.name}</a>
      <div className="cover-witer text-nowrap">{showWriter && "by" (info.copywriter || info.creator.nickname)}</div>
    </SongCoverWrapper>
  )
})
