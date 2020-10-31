import React, { memo } from 'react';
import { useSelector, useDispatch } from "react-redux"

import { getCurrentPlayListAction, changeCurrentPageAction } from "../../store/actions";
import { PER_PAGE_NUM } from "@/common/constant"
import { PlayListContentWrapper } from "./style";

import DHSongCover from "@/components/content/song-cover";
import DHPagination from "@/components/content/pagination";

export default memo(function DHPlayListContent() {
  // state and props

  // redux-hooks
  const dispatch = useDispatch()
  const { currentPlayList, currentPage } = useSelector(state => ({
    currentPlayList: state.getIn(["playlist", "currentPlayList"]),
    currentPage: state.getIn(["playlist", "currentPage"]),
  }))
  // react-hooks

  // other handle
  const total = currentPlayList.total || 0
  const playlist = currentPlayList.playlists || []
  const onPageChange = (page, pageSize) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(getCurrentPlayListAction({offset: (page - 1) * PER_PAGE_NUM}));
  }

  return (
    <PlayListContentWrapper>
      <div className="play-list">
        {
          playlist.map((item, index) => {
            return (
              <DHSongCover info={item} key={item.id} right="30px" showWriter={true} />
            )
          })
        }
      </div>
      <DHPagination 
        currentPage={currentPage}
        total={total} 
        pageSize={PER_PAGE_NUM}
        onPageChange={onPageChange}
      />
    </PlayListContentWrapper>
  )
})
