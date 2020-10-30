import React, { memo } from 'react'

import { HeaderPlayerWrapper } from "./style";

export default memo(function DHThemeHeaderPlayer(props) {
  // state and props
  const { title } = props
  return (
    <HeaderPlayerWrapper>
      <h3>{title}</h3>
    </HeaderPlayerWrapper>
  )
})
