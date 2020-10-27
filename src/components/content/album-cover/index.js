import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { AlbumCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { resetPlayListAction } from '../../../pages/player/store/actions'

export default memo(function DHAlbumCover(props) {
  // state and props
  const { info, size = 100, bgp = -570, width = 118 } = props

  // redux-hooks
  const dispatch = useDispatch()

  // other handle
  const resetPlayList = (id) => {
    dispatch(resetPlayListAction({ id: id }))
  }

  return (
    <AlbumCoverWrapper size={size} bgp={bgp} width={width}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.naem} />
        <a href="/todo" className="cover image_cover" title={info.name}>{info.name}</a>
        <button className="play sprite_icon" title="播放" onClick={event => resetPlayList(info.id)}>{info.name}</button>
      </div>
      <div className="album-info">
        <a className="name text-nowrap" href="/todo" title={info.name}>{info.name}</a>
        <a className="artist text-nowrap" href="/todo" title={info.name}>{info.artist.name}</a>
      </div>
    </AlbumCoverWrapper>
  )
})
