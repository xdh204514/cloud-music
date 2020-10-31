import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import classNames from "classnames";

import { 
  getCurrentPlayListAction, 
  changeCurrentCategoryAction,
  changeCurrentPageAction,
} from "../../store/actions"
import { PlayListCatWrapper } from "./style";

export default memo(function DHPlayListCat(props) {
  // state and props
  const { hideCatPanel } = props

  // redux-hooks
  const dispatch = useDispatch()
  const { allCategory, currentCategory } = useSelector(state => ({
    allCategory: state.getIn(["playlist", "allCategory"]),
    currentCategory: state.getIn(["playlist", "currentCategory"]),
  }), shallowEqual)

  // react-hooks

  // other handle
  const changeCurrentCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name))
    dispatch(getCurrentPlayListAction())
    dispatch(changeCurrentPageAction(1))
    hideCatPanel()
  }

  return (
    <PlayListCatWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="header">
        <span onClick={event => {changeCurrentCategory("全部")}}>全部风格</span>
      </div>
      <div className="category">
        {
          allCategory.map((item, index) => {
            return (
              <dl className={"item" + index} key={item.name}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span className="name">{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map((iten, index) => {
                      return (
                        <div className="iten" key={iten.name}>
                          <span 
                            className={classNames("name", currentCategory === iten.name ? "active" : "")} 
                            onClick={event => {changeCurrentCategory(iten.name)}}
                          >
                            {iten.name}
                          </span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </PlayListCatWrapper>
  )
})
