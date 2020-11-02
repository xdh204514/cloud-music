import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getHotAlbumListAction, getTopAlbumListAction } from "./store/actions";
import { AlbumWrapper } from "./style";

import DHHotAlbum from "./children-cpns/hot-album";
import DHTotAlbum from "./children-cpns/top-album";

export default memo(function DHAlbums() {

  // redux-hooks
  const dispatch = useDispatch()

  // react-hooks
  useState(() => {
    dispatch(getHotAlbumListAction())
    dispatch(getTopAlbumListAction())
  }, [dispatch])

  return (
    <AlbumWrapper className="wrap-v2">
      <DHHotAlbum />
      <DHTotAlbum />
    </AlbumWrapper>
  )
})
