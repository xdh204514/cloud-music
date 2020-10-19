import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from './store/actions'

function DHRecmmends(props) {
  
  // 通过 redux-hook 获取 dispatch 和 state 中的数据
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommends").get("topBanners")
    topBanners: state.getIn(["recommends", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch()
  
  useEffect(() => {
    // 发送网络请求
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <div>
      <h2>DHRecmmends:{topBanners.length}</h2>
    </div>
  )
}

export default memo(DHRecmmends)













// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'

// import { getTopBannersAction } from './store/actions'

// function DHRecmmends(props) {
//   const { topBanners, getTopBanners } = props
  
//   useEffect(() => {
//     getTopBanners()
//   }, [getTopBanners])

//   return (
//     <div>{topBanners.length}
//       <h2>DHRecmmends:</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommends.topBanners
//   }
// }

// const mapActoinToProps = dispatch => {
//   return {
//     getTopBanners: () => {
//       dispatch(getTopBannersAction()) 
//     }
//   }
// }

// export default connect(mapStateToProps, mapActoinToProps)(memo(DHRecmmends))
