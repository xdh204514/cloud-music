import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllCategoryAction, getCurrentPlayListAction } from "./store/actions"
import { PlayListWrapper } from "./style";

import DHPlayListHeader from "./children-cpns/playlist-header";
import DHPlayListContent from "./children-cpns/playlist-content";

export default memo(function DHPlayList() {
  // state and props

  // redux-hooks
  const dispatch = useDispatch()

  // react-hooks
  useEffect(() => {
    dispatch(getAllCategoryAction())
    dispatch(getCurrentPlayListAction({offset: 0}))
  }, [dispatch])

  // other handle
  return (
    <PlayListWrapper className="wrap-v2">
      <DHPlayListHeader />
      <DHPlayListContent />
    </PlayListWrapper>
  )
})
