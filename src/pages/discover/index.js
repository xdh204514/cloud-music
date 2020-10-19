import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapped, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data'

import { NavLink } from 'react-router-dom'


export default memo(function DHDiscover(props) {
  const {route} = props

  useEffect(() => {
  })

  return (
    <DiscoverWrapped>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <div className="item" key={item.link}>
                  <NavLink to={item.link} exact>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapped>
  )
})
