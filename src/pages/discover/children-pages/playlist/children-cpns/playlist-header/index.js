import React, { memo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { PlayListHeaderWrapper, HeaderLeft, HeaderRight } from "./style";

import DHPlayListCat from "../playlist-category"

export default memo(function DHPlayListHeader() {
  // state and props
  const [isShowCatPanel, setIsShowCatPanel] = useState(false)
  // redux-hooks
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["playlist", "currentCategory"]),
  }), shallowEqual)

  // react-hooks

  // other handle
  const hideCatPanel = () => {
    setIsShowCatPanel(false)
  }

  return (
    <PlayListHeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={event => {setIsShowCatPanel(!isShowCatPanel)}}>
          <span>选择分类</span>
          <i className="icon sprite_icon2"></i>
        </button>
        { isShowCatPanel ? <DHPlayListCat hideCatPanel={hideCatPanel} /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </PlayListHeaderWrapper>
  )
})
