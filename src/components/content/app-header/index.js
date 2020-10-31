import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapped, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'

export default memo(function DHAppHeader() {


  // 业务逻辑
  function showLinkItem(item, index) {
    // 前3个链接是路由跳转，后3个是a标签跳转
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  return (
    <HeaderWrapped>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">我的网易云</a>
          <div className="link-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="link-item" key={item.link}>
                    {showLinkItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>} />
          <div className="creator-center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapped>
  )
})
