import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

import DHTopBanner from './children-cpns/top-banner'
import DHHotRecommend from './children-cpns/hot-recommend'
import DHNewAlbum from './children-cpns/new-album'
import DHRecommendRank from './children-cpns/recommend-rank'

function DHRecmmends(props) {

  return (
    <RecommendWrapper>
      <DHTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <DHHotRecommend />
          <DHNewAlbum />
          <DHRecommendRank/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
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
