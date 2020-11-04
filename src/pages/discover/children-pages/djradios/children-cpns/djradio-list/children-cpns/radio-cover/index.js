import React, { memo } from 'react';

import { RadioListWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function DHRadioList(props) {
  const { info } = props
  return (
    <RadioListWrapper>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2 className="title">{info.name}</h2>
        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left"></i>
          {info.dj.nickname}
        </div>
        <div className="count">
          <span className="phase">共{info.programCount}期</span>
          <span className="subscribe">订阅{info.subCount}次</span>
        </div>
      </div>
    </RadioListWrapper>
  )
})
