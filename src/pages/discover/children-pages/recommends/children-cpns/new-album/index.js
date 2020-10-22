import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actions'
import { NewAlbumWrapper } from './style'
import { NEW_ALBUMS_PAGE_NUM } from '@/common/constant'

import { Carousel } from 'antd'
import DHRecomendHeader from '@/components/content/recommend-header'
import DHAlbumCover from '@/components/content/album-cover'

export default memo(function DHNewAlbum() {
  //state 

  // other hooks
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommends", "newAlbums"])
  }))

  // react hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])
  const carouselRef = useRef()

  // other business
  const PAGE_ARRAY = Array.from({length: NEW_ALBUMS_PAGE_NUM}, (v,k) => k)

  return (
    <NewAlbumWrapper>
      <DHRecomendHeader title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => carouselRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={carouselRef}>
            {
              PAGE_ARRAY.map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5, (item+1)*5).map(iten => {
                        return(
                          <DHAlbumCover key={iten.id} info={iten} />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => carouselRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
