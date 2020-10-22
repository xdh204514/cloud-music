import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapped
} from './style'

function DHRecomendHeader(props) {

  const { title, keywords } = props
  return (
    <HeaderWrapped className="sprite_02">
      <HeaderLeft>
        <div className="title">{title}</div>
        <div className="keywords">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">{index !== keywords.length - 1 ? '|' : ''}</span>
                </div>
              )
            })
          }
        </div>
      </HeaderLeft>
      <HeaderRight>
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </HeaderRight>
    </HeaderWrapped>
  )
}

DHRecomendHeader.PropType = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

DHRecomendHeader.defaultProps = {
  keywords: []
}

export default memo(DHRecomendHeader)
