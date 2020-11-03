import React, { memo } from 'react';

import { artistCategories } from "@/network/api/apiMirror/discover/local-data";

import { ArtistCatWrapper } from "./style";

export default memo(function DHArtistCat() {

  const renderArtist = (artists, area) => {
    return (
      <div>
        {
          artists.map((item, index) => {
            return (
              <div className="item" key={item.name}>
                <span>{item.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <ArtistCatWrapper>
      {
        artistCategories.map((item, index) => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {
                renderArtist(item.artists, item.area)
              }
            </div>
          )
        })
      }
    </ArtistCatWrapper>
  )
})
