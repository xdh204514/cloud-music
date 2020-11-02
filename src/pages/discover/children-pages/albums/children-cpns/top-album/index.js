import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { getTopAlbumListAction, changeCurrentPageAction } from "../../store/actions";
import { PER_PAGE_NUM } from "@/common/constant";
import { TopAlbumWrapper } from "./style";

import DHThemeHeaderNormal from "@/components/content/theme-header-normal";
import DHAlbumCover from "@/components/content/album-cover";
import DHPagination from "@/components/content/pagination";

export default memo(function DHTopAlbums() {

  // redux-hooks
  const dispatch = useDispatch()
  const { topAlbumList, topTotalCount, currentPage } = useSelector(state => ({
    topAlbumList: state.getIn(["album", "topAlbumList"]),
    topTotalCount: state.getIn(["album", "topTotalCount"]),
    currentPage: state.getIn(["album", "currentPage"]),
  }), shallowEqual)


  // other handle
  const onPageChange = (page) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(getTopAlbumListAction({offset: (page - 1) * PER_PAGE_NUM}));
  }

  return (
    <TopAlbumWrapper>
      <DHThemeHeaderNormal title="全部新碟" />
      <div className="top-list">
        {
          topAlbumList.map(item => {
            return (
              <DHAlbumCover
                size={"130"} 
                width={"153"} 
                bgp={"-845"}
                key={item.id} 
                info={item}
              />
            )
          })
        }
      </div>
      <DHPagination 
        currentPage={currentPage}
        total={topTotalCount} 
        pageSize={PER_PAGE_NUM}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})
