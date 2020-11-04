import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames"

import { 
  changeCurrentAreaAction, 
  changeCurrentTypeAction,
  getHotArtistListAction,
  getArtistListAction,
} from "../../store/actions";
import { artistCategories } from "@/network/api/apiMirror/discover/local-data";
import { ArtistCatWrapper } from "./style";

export default memo(function DHArtistCat() {

  // redux-hooks
  const dispatch = useDispatch()
  const { currentArea, currentType} = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]), 
    currentType: state.getIn(["artist", "currentType"]), 
  }), shallowEqual)

  // other handle
  const selectArtistCat = (type, area) => {
    dispatch(changeCurrentTypeAction(type))
    dispatch(changeCurrentAreaAction(area))

    if(area === -1 && type.type === 1) {  // 获取推荐分类歌手列表
      dispatch(getHotArtistListAction())
    } else {
      if (area === -1) {  // 获取入驻分类歌手列表
        dispatch(getArtistListAction({cat: 5001}))
      }
    }  // 其他分类歌手会在修改了 currentArea、currentType之后，在 list-alpha 中进行分发 
  }

  const renderArtist = (artists, area) => {
    return (
      <div>
        {
          artists.map((item, index) => {
            const isSelected = currentArea === area && currentType.type === item.type
            return (
              <div className={classNames("item", {"active": isSelected})} key={item.name}>
                <span onClick={event => selectArtistCat(item, area)}>{item.name}</span>
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
