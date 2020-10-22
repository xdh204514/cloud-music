import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannersAction } from '../../store/actions';
import {
  TopBannerWrapped,
  TopBannerLeft,
  TopBannerRight,
  TopBannerControl
} from './style';

import { Carousel } from 'antd';

export default memo(function DHTopBanner() {

  // 组件内部状态
  const [currentIndex, setCurrentIndex] = useState(0)

  // other hooks
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommends", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // react hooks
  const controlRef = useRef()
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, [])

  // 其他业务逻辑
  // 获取当前轮播图片的高斯模糊图片
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <TopBannerWrapped bgImage={bgImage}>
      <div className="banner wrap-v2">
        <TopBannerLeft>
          <Carousel autoplay ref={controlRef} beforeChange={bannerChange}>
            {
              topBanners.map(item => {
                return (
                  <div key={item.imageUrl} className="banner-item">
                    <img className="img" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </TopBannerLeft>
        <TopBannerRight></TopBannerRight>
        <TopBannerControl>
          <button className="btn left" onClick={event => controlRef.current.prev()}></button>
          <button className="btn right" onClick={event => controlRef.current.next()}></button>
        </TopBannerControl>
      </div>
    </TopBannerWrapped>
  )
})
