import React, { memo, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getHotArtistListAction } from "./store/actions";
import { ArtistWrapper } from "./style";

import DHArtistList from "./children-cpns/artist-list"
import DHArtistCat from "./children-cpns/artist-cat"

export default memo(function DHArtists() {

  // redux-hooks
  const dispatch = useDispatch()

  // react-hooks
  useEffect(() => {
    dispatch(getHotArtistListAction())
  }, [dispatch])
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <DHArtistCat />
        <DHArtistList />
      </div>
    </ArtistWrapper>
  )
})
