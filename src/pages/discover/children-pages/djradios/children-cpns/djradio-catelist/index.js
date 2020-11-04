import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { getCateListAction, changeCurrentIdAction } from "../../store/actions";
import { CateListWrapper, CateListContent, ItemImage } from "./style";

import { Carousel } from "antd";

export default memo(function DHCateList() {

  // state and props

  // redux-hooks
  const dispatch = useDispatch()
  const { currentCatId, cateList } = useSelector(state => ({
    currentCatId: state.getIn(["djradio", "currentCatId"]),
    cateList: state.getIn(["djradio", "cateList"]),
  }), shallowEqual)

  // react-hooks
  useEffect(() => {
    dispatch(getCateListAction())
  }, [dispatch])
  const carouselRef = useRef();


  // other handle
  const PER_PAGE_NUM = 18  // 轮播图每一页 item 展示的电台数量
  const pageNum = Math.ceil(cateList.length / PER_PAGE_NUM) || 1  // 轮播图页数
  const getSize = (index) => {  // 获取截取到的位置
    return index * PER_PAGE_NUM > cateList.length ? index * PER_PAGE_NUM : cateList.length
  }

  return (
    <CateListWrapper>
      {
        pageNum > 1 && (
          <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
        )
      }
      <CateListContent>
        <Carousel dots={{ className: "dots" }} ref={carouselRef}>
          {
            
            Array(pageNum).fill(0).map((_, index) => {
              return (
                <div key={index} className="cate-page">
                  {
                    cateList.slice(index * PER_PAGE_NUM, getSize(index + 1)).map((item, index) => {
                      return (
                        <div
                          key={item.id}
                          className={classNames("cate-item", { "active": currentCatId === item.id })}
                          onClick={e => dispatch(changeCurrentIdAction(item.id))}
                        >
                          <ItemImage className="image" imgUrl={item.picWebUrl}></ItemImage>
                          <span>{item.name}</span>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </CateListContent>
      {
        pageNum > 1 && (
          <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
        )
      }
    </CateListWrapper>
  )
})
