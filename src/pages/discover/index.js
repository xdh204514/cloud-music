import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { DiscoverWrapped, TopMenu } from './style';
import { dicoverMenu } from '@/common/local-data';

export default memo(function DHDiscover(props) {
  const { route } = props

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
