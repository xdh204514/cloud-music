import React, { memo } from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { HotAlbumWrapper } from "./style";

import DHThemeHeaderNormal from "@/components/content/theme-header-normal";
import DHAlbumCover from "@/components/content/album-cover";

export default memo(function DHHotAlbums() {

  const { hotAlbumList } = useSelector(state => ({
    hotAlbumList: state.getIn(["album", "hotAlbumList"]),
  }), shallowEqual)

  return (
    <HotAlbumWrapper>
      <DHThemeHeaderNormal title="热门新碟" />
      <div className="hot-list">
        {
          hotAlbumList.slice(0, 10).map(item => {
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
    </HotAlbumWrapper>
  )
})
