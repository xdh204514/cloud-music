import React, { memo } from 'react';

import { getSizeImage } from "@/utils/format-utils";
import { ListItemWrapper } from "./style";

export default memo(function DHListItem(props) {
  const { index, info } = props

  return (
    <ListItemWrapper>
      {
        index < 10 && (
          <div>
            <div className="image" title={`${info.name}的音乐`}>
              <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
            </div>
            <div className="info">
              <span className="name text-nowrap" title={`${info.name}的音乐`}>{info.name}</span>
              <i className="sprite_icon2 icon" title={`${info.name}的主页`}></i>
            </div>
            <div className="divider"></div>
          </div>
        )
      }

      {
        index > 9 && (
          <div className="info2">
            <span className="name text-nowrap" title={`${info.name}的音乐`}>{info.name}</span>
            <i className="sprite_icon2 icon" title={`${info.name}的主页`}></i>
          </div>
        )
      }


    </ListItemWrapper>
  )
})
