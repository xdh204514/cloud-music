import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import classNames from "classnames";

import { getArtistListAction } from "../../../../store/actions";
import { singerAlphas } from "@/utils/handle-data-utils";
import { ListAlphaWrapper } from "./style";

export default memo(function DHListAlpha() {


  // redux-hooks
  const dispatch = useDispatch()
  const { currentType, currentArea } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    currentArea: state.getIn(["artist", "currentArea"]),
  }), shallowEqual)

  // react-hooks
  const [currentAlpha, setCurrentAlpha] = useState("-1")

  useEffect(() => {
    const params = {
      type: currentType.type,
      area: currentArea,
      initial: currentAlpha,
    }
    dispatch(getArtistListAction(params))
  }, [dispatch, currentType, currentArea, currentAlpha])

  return (
    <ListAlphaWrapper>
      {
        singerAlphas.map((item, index) => {
          const isSelected = currentAlpha === item
          let alpha = null
          if (item === "0") alpha = "其他";
          if (item === "-1") alpha = "热门";
          if (item !== "0" && item !== "-1") alpha = item
          return (
            <div className={classNames("item", { "active": isSelected })} key={item}>
              <span onClick={event => setCurrentAlpha(item)}>{alpha.toUpperCase()}</span>
            </div>
          )
        })
      }
    </ListAlphaWrapper>
  )
})
