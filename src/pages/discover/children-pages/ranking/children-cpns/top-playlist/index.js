import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { 
  changeCurrentIndexAction, 
  getCurrentPlayListAction,
} from "../../store/actions";
import { TopPlayListWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function DHTopPlayList() {
  // state and props
  // redux-hooks
  const dispatch = useDispatch()
  const { allTopList, currentIndex } = useSelector(state => ({
    allTopList: state.getIn(["ranking", "allTopList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"]),
  }), shallowEqual)

  // react-hoooks
  useEffect(() => {
    const id = (allTopList.list && allTopList.list[currentIndex].id);
    if (!id) return;
    dispatch(getCurrentPlayListAction({id}))
  }, [allTopList, dispatch, currentIndex])

  // other handle
  const topList = allTopList.list || []
  const changePlayList = (item, index) => {
    dispatch(changeCurrentIndexAction(index))
    // 由于在上面的 useEffect 中已经会根据 currentIndex 的改变去请求 playList 了，所以此处不需要在请求
    // 根据实际测试，如果请求了，排行榜页面右边的数据会显示的比较快
    dispatch(getCurrentPlayListAction({id: item.id}))
  }

  return (
    <TopPlayListWrapper>
      {
        topList.map((item, index) => {
          let header = null
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div  key={item.id}>
              {header}
              <div className={classNames("item", {"active": index === currentIndex})} onClick={event => changePlayList(item, index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopPlayListWrapper>
  )
})
