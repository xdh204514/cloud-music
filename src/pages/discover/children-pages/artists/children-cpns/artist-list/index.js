import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { ArtistListWrapper } from "./style";

import DHThmemHeaderNormal from "@/components//content/theme-header-normal/";
import DHListAlpha from "./children-cpns/list-alpha"
import DHListItem from "./children-cpns/list-item"

export default memo(function DHArtistList() {
  const { currentType, currentArea, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    currentArea: state.getIn(["artist", "currentArea"]),
    artistList: state.getIn(["artist", "artistList"]),
  }), shallowEqual)
  return (
    <ArtistListWrapper>
      <DHThmemHeaderNormal title={currentType.name} />
      {
        currentArea !== -1 && <DHListAlpha />
      }
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return (
              <DHListItem key={item.id} index={index} info={item} />
            )
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
