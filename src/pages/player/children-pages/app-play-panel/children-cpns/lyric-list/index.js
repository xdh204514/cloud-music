import React, { memo, useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from "react-redux"
import classNames from 'classnames';

import { LyricListWrapper } from './style'

export default memo(function DHLyricList() {
  // state and props

  // redux-hooks
  const { lyricList, currentLyricIndex } = useSelector(state => ({
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)

  // react-hooks
  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    panelRef.current.scrollTo(0, (currentLyricIndex - 3) * 32)

  }, [currentLyricIndex])


  return (
    <LyricListWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          lyricList.map((item, index) => {
            return (
              <div className={classNames("lrc-item", { "active": currentLyricIndex === index })} key={item.time}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </LyricListWrapper>
  )
})
