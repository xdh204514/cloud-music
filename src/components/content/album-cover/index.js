import React, { memo } from 'react'

import { AlbumCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function DHAlbumCover(props) {
  const { info, size=100, bgp=-570, width=118 } = props
  return (
    <AlbumCoverWrapper size={size} bgp={bgp} width={width}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.naem} />
        <a href="/todo" className="cover image_cover" title={info.name}>{info.name}</a>
        <a href="/todo" className="play sprite_icon" title="播放">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
